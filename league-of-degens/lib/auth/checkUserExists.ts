import { createClient } from "@/lib/supabase/server";

export async function checkUserExists(discordId: string): Promise<boolean> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("discord_id", discordId)
    .single();

  if (error) {
    console.error("Error checking user:", error);
    return false;
  }

  return !!data;
}
