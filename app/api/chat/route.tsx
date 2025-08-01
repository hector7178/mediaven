import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL!??"https://ycaheghfuknswbavqgfx.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!??"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljYWhlZ2hmdWtuc3diYXZxZ2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTM3MTMsImV4cCI6MjA2OTM2OTcxM30.G_Q3_SmFwClsJMiREVJjj6brysF62W8Ecm5CtpewLwQ";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!??"AIzaSyBw9Er1MYgz2TAYYaVk6dRqWuF7WCMFy9M";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function POST(req: NextRequest) {
    try {
        const { message, user_id } = await req.json();

        if (!message || !user_id) {
            return NextResponse.json({ error: 'Missing message or user_id' }, { status: 400 });
        }

        // Save incoming message to Supabase
        const { data: userMsg, error: userMsgError } = await supabase
            .from('message')
            .insert([{ user_id, content: message, role: 'user' }])
            .select()

        if (userMsgError) {
            return NextResponse.json({ error: 'Error saving user message',userMsgError }, { status: 500 });
        }

        // Call Gemini API (2.9 flash)
        const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,"X-goog-api-key": GEMINI_API_KEY},
            body: JSON.stringify({
                systemInstruction: {
                    parts: [{ text: "Actúa como un experto medico, doctor. responde cxon un posible diagnostico , las causas las consecuencias y su posible tratamiento. incluido con el poncentaje de seguridad en el diagnostico" }]  // ← Tu instrucción del sistema
                },
                contents: [{ parts: [{ text: message }] }]
            })
        });

        if (!geminiRes.ok) {
            return NextResponse.json({ error: 'Gemini API error' }, { status: 500 });
        }

        const geminiData = await geminiRes.json();
        const aiMessage = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

        // Save AI response to Supabase
        const { data: aiMsg, error: aiMsgError } = await supabase
            .from('message')
            .insert([{ user_id, content: aiMessage, role: 'assistant' }])
            .select()
            .single();

        if (aiMsgError) {
            return NextResponse.json({ error: 'Error saving AI message' }, { status: 500 });
        }

        return NextResponse.json({ user: userMsg, ai: aiMsg },{status:200});
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error'+ error }, { status: 500 });
    }
}