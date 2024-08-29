import React from "react";
import { auth, signIn } from "@/auth"; // Assuming auth is a function that fetches the session
import { Button } from "./ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Avatar, { UserAvatar } from "./Avatar";

export async function AuthButton() {
  const session = await auth();
  if (!session)
    return (
      <div>
        <form
          action={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/" });
          }}
        >
          <Button type="submit">
            <DiscordLogoIcon className="mr-2 h-4 w-4" /> Login with Discord
          </Button>
        </form>
      </div>
    );

  return <UserAvatar />;
}

export default AuthButton;
