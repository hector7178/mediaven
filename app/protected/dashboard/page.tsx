

"use client" 


export default  function ProtectedPage() {
 
  
  return (
    <main className="flex flex-col w-full h-full">
      <header className="p-6 text-foreground flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Paciente IA</h1>
        <span className="text-xl">Bienvenido!</span>
      </header>
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="text-4xl font-bold text-blue-600">3</span>
          <span className="mt-2 text-gray-700">Citas programadas</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600">2</span>
          <span className="mt-2 text-gray-700">Alertas de salud IA</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <span className="text-4xl font-bold text-purple-600">1</span>
          <span className="mt-2 text-gray-700">Resultados pendientes</span>
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recomendaciones IA</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>Revisar tus alertas de salud recientes.</li>
          <li>Actualizar tu información médica.</li>
          <li>Consultar sugerencias de bienestar y tratamiento.</li>
        </ul>
      </section>
    </main>
  );
}
