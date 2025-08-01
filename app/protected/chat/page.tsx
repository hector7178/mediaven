import React from 'react';
import Chats from './Chats';
import Image from 'next/image';
import robot from "../../public/g24.svg"
import { createClient } from '@/app/lib/supabase/server';
const Page = async () => {
      const supabase = await createClient();
    const user= await supabase.auth.getUser()
    return (
        <main className='flex flex-row '>
        <div className="w-1/3 h-full md:flex hidden p-10 items-center justify-center">
            <Image src={robot} alt="ia medical" width={500} height={500} className="w-[50vw] h-[50vh] "/>
          </div>
            <Chats user={user?.data?.user?.id}/>
        </main>
    );
}

export default Page;
