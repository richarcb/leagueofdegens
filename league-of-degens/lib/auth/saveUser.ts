import { createClient } from "@/lib/supabase/server";

interface NewUser {
  created_at: string;
  discord_id?: number | null;
  id?: number;
  league_name?: string | null;
  name?: string | null;
  username: string;
}

export async function saveUser(user: NewUser): Promise<void> {
  const supabase = createClient();
  const { error } = await supabase.from("users").insert(user);

  if (error) {
    console.error("Error saving user:", error);
  }
}
