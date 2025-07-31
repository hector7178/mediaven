

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.svg"
import ia from "./public/138217259_10292838.jpg"
import doctor from "./public/doctor.jpg"
import doctora from "./public/doctora.jpg"
import grupo from "./public/grupo.jpg"
import venezuela from "./venezuela.svg"
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Image src={logo} alt="logo" width={50} height={50} className="w-12 h-12"/>
              <Link href={"/"} className="text-teal-400 text-3xl hidden md:flex">Mediaven</Link>
            </div>
           <AuthButton />
          </div>
        </nav>
        <section className="w-full h-screen flex flex-col md:flex-row gap-4">
          <div className="w-1/2 h-full md:flex hidden">
            <Image src={ia} alt="ia medical" width={500} height={500} className="w-full h-full"/>
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 p-10 md:p-18">
            <h1 className="text-3xl md:text-5xl font-bold text-teal-500 text-center">
              Revoluciona tu atención médica con IA
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
              Mediaven es tu asistente médico inteligente impulsado por inteligencia artificial. 
              Analiza síntomas, responde preguntas de salud y te orienta para tomar mejores decisiones médicas, todo de manera segura y privada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link href="/signup" className="bg-teal-500 w-fit hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow">
                Comenzar gratis
              </Link>
              <Link href="/about" className="border border-teal-500 w-fit text-teal-500 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold">
                Saber más
              </Link>
            </div>
          </div>
          
          
        </section>
        <div className="p-6 h-fit w-full flex flex-col sm:flex-row gap-8 justify-center items-center bg-teal-100">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-teal-700">24/7</span>
              <span className="text-gray-500">Asistencia médica</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-teal-700">100%</span>
              <span className="text-gray-500">Privacidad y seguridad</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-teal-700">IA</span>
              <span className="text-gray-500">de última generación</span>
            </div>
        </div>
        <section className="w-full h-fit py-10 max-w-4xl flex flex-col sm:flex-row items-center gap-8 mt-12 bg-white rounded-xl p-8">
          <div className="flex-1 flex flex-col items-start gap-6 text-left">
            <h2 className="text-3xl font-bold text-teal-500 mb-2">Cobertura Nacional</h2>
            <p className="text-gray-700 mb-4">
              Mediaven está disponible en todos los estados de Venezuela, brindando acceso a atención médica inteligente sin importar tu ubicación. Nuestro compromiso es llegar a cada rincón del país para que todos puedan beneficiarse de la tecnología en salud.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Disponible 24/7 en todo el territorio nacional</li>
              <li>Acceso desde cualquier dispositivo con internet</li>
              <li>Soporte en cada estado de Venezuela</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={venezuela}
              alt="Mapa de Venezuela"
              width={320}
              height={220}
              className="rounded-lg object-contain shadow"
              priority
            />
          </div>
        </section>
        <section className="w-full max-w-4xl h-fit py-10 flex flex-col sm:flex-row items-center gap-16 mt-12 bg-white rounded-xl p-8">
          <div className="flex-1 flex flex-col items-start gap-6 text-left">
            <h2 className="text-3xl font-bold text-teal-500 mb-2">IA + Doctores en Tiempo Real</h2>
            <p className="text-neutral-700 mb-4">
              Mediaven combina la inteligencia artificial avanzada con la experiencia de médicos reales para ofrecerte respuestas precisas y acompañamiento humano cuando más lo necesitas. Nuestra plataforma te conecta con profesionales de la salud en tiempo real, respaldados por IA para un diagnóstico y orientación más eficiente.
            </p>
            <ul className="list-disc list-inside text-neutral-600">
              <li>Consultas instantáneas con IA médica</li>
              <li>Acceso a doctores certificados en tiempo real</li>
              <li>Colaboración entre IA y profesionales para mejores resultados</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center relative">
            <Image
              src={grupo}
              alt="Integración de IA y doctores"
              width={160}
              height={120}
              className="w-[300px] h-[200px] rounded-lg object-contain shadow"
              priority
            />
            <Image
              src={doctora}
              alt="Chat en tiempo real con doctores"
              width={160}
              height={120}
              className="w-[100px] h-[150px] rounded-lg object-contain shadow absolute -right-4 -top-20"
              priority
            />
            <Image
              src={doctor}
              alt="Chat en tiempo real con doctores"
              width={160}
              height={120}
              className="rounded-lg w-[150px] h-[150px] object-contain shadow absolute top-3/4 -left-20"
              priority
            />
          </div>
        </section>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Mediaven CA.
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
