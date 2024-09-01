import { auth } from "@/auth";
import { SignIn } from "@/components/dashboard/signIn";
import React from "react";

export async function NotSignedInPage() {
  const session = await auth();
  if (session) {
    return <div>League of Degens </div>;
  }
  return (
    <div>
      Unauthorized <SignIn />
    </div>
  );
}

export default NotSignedInPage;
