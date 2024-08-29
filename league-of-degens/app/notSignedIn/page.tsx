import { auth } from "@/auth";
import { useSession } from "@/providers/SessionProvider/SessionContext";
import React from "react";

export async function NotSignedInPage() {
  const session = await auth();
  if (session) {
    return <div>Velkommen</div>;
  }
  return <div>page</div>;
}

export default NotSignedInPage;
