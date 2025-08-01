import { redirect } from "next/navigation";

import { createClient } from "@/app/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();
 const { data:dataUser, error:dataError } = await supabase.auth.getUser()
  const { data, error } = await supabase.auth.getClaims();
  if (error || dataError  || !data?.claims) {
    return redirect("/auth/login");
  }
  if(dataUser?.user){
   return redirect("/protected/dashboard");
  }
  return (
    <main className="flex flex-col">

    </main>
  );
}
