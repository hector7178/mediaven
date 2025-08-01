

import {  SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
      <SidebarProvider >
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
       <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items?.map((item) => (
                <SidebarMenuItem key={item?.title}>
                  <SidebarMenuButton asChild>
                    <a href={item?.url}>
                      <span>{item?.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>
    </SidebarProvider>
        
    </main>
  );
}
