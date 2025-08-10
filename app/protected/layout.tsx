
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const items = [
  {
    title: "Perfil",
    url: "/protected/dashboard",
  },
  {
    title: "Chat",
    url: "/protected/chat",
  },
  {
    title: "Información de doctores",
    url: "/protected/doctors",
  },
]
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className=" flex flex-col p-20">
        <Drawer   direction="left">
          <DrawerTrigger className="absolute top-24 left-24"><MenuIcon className="w-6 h=6"/></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                Navegación
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <DrawerDescription className="p-6 flex flex-col gap-4">
              {items?.map((d,i:number)=>{
                return (<Link href={d?.url} key={i} className="flex flex-row gap-2 font-bold">{d?.title}</Link>)
              })}
            </DrawerDescription>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
          {children}
        </div>
    </main>
  );
}
