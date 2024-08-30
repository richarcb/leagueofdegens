import { auth } from "@/auth";
import { MainNav } from "@/components/dashboard/main-nav";
import { SignIn } from "@/components/dashboard/signIn";
import { SignOut } from "@/components/dashboard/signOut";

export default async function Home() {
  const session = await auth();
  if (!session)
    return (
      <div className="flex items-center w-screen h-[50vh] justify-center">
        <SignIn />
      </div>
    );

  return <div className="flex items-center justify-center">Test</div>;
}
