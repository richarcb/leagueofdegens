import { auth } from "@/auth";
import React from "react";

export async function NotSignedInPage() {
  const session = await auth();
  if (session) {
    return <div>League of Degens</div>;
  }
  return <div>Unauthorized</div>;
}

export default NotSignedInPage;
