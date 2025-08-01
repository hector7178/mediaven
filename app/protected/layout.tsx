

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import {  SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
      <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5 relative ">
        <Drawer  direction="left">
  <DrawerTrigger><MenuIcon className="w-6 h=6"/></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>
        Navegacion
      </DrawerTitle>
      <DrawerDescription></DrawerDescription>
    </DrawerHeader>
    <DrawerDescription>
      {items?.map((d,i:number)=>{
        return (<Link href={d?.url} className="flex flex-row gap-2">{d?.title}</Link>)
      })}
    </DrawerDescription>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
          {children}
        </div>
    </main>
  );
}
