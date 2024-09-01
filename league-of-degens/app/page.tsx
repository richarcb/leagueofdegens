import { auth } from "@/auth";
import type { Database } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { useEffect } from "react";

export default async function Home() {
  const session = await auth();
  session?.user;
  const supabase = createClient();
  // const { data, error } = await supabase
  //   .from("users")
  //   .select("*")
  //   .eq("id", 1)
  //   .single();
  // console.log(data?.name);
  type User = Database["public"]["Tables"]["users"]["Row"];
  if (!session)
    return (
      <div className="flex items-center w-screen h-[50vh] justify-center">
        test
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      Welcome to League of Degens
      {/* {data?.name} */}
    </div>
  );
}
