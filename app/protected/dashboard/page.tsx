// @ts-nocheck
/* eslint-disable */

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type urgencyColortype= "Bajo riesgo"|"Medio riesgo"|"Alto riesgo"
export default  function ProtectedPage() {
 
  // Mock data for demonstration
  const aiSummary:{
    diagnosis:any[],
    findings:any[],
    riskPrediction:any,
    urgency:urgencyColortype
  } = {
    diagnosis: [
      { name: "Hipertensión arterial", confidence: 0.92 },
      { name: "Riesgo de diabetes", confidence: 0.81 },
    ],
    findings: [
      "Anomalía detectada en radiografía de tórax (zona superior derecha)",
      "Patrón irregular en frecuencia cardíaca",
    ],
    riskPrediction: {
      label: "Riesgo cardiovascular a 10 años",
      value: 0.67,
    },
    urgency: "Alto riesgo",
  };

  const urgencyColor = {
    "Bajo riesgo": "bg-green-100 text-green-800",
    "Medio riesgo": "bg-yellow-100 text-yellow-800",
    "Alto riesgo": "bg-red-100 text-red-800",
  };

  return (
    <main className="flex flex-col">
      <div className="flex-1 w-full flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
        {/* Diagnóstico AI */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Diagnóstico AI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {aiSummary?.diagnosis.map((d:any, i:number) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{d?.name}</span>
                  <Badge variant="outline" className="ml-2">{(d?.confidence * 100).toFixed(0)}%</Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="font-semibold mb-1">Hallazgos:</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {aiSummary?.findings?.map((f:any, i:number) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Predicción de riesgo */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Predicción de riesgo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <span className="text-sm">{aiSummary?.riskPrediction?.label}</span>
              <Progress value={aiSummary?.riskPrediction?.value * 100} className="h-3" />
              <div className="flex items-center gap-2 mt-2">
                <Badge className={urgencyColor[aiSummary?.urgency] || ""}>
                  {aiSummary?.urgency}
                </Badge>
                <span className="text-lg font-bold">{(aiSummary?.riskPrediction?.value * 100).toFixed(0)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

       
      </div>

     
    </main>
  );
}
