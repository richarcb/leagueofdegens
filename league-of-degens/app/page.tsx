import { auth } from "@/auth";
import { MainNav } from "@/components/dashboard/main-nav";
import { SignIn } from "@/components/dashboard/signIn";
import { SignOut } from "@/components/dashboard/signOut";

export default async function Home() {
  const session = await auth();
  if (!session)
    return (
      <div className="flex items-center justify-center">
        Not signed in
        <SignIn />
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      <div className="hidden flex-col md:flex">
        <div>
          <div className="flex h-16 items-center px-4">
            signed in
            {/* <MainNav className="mx-6" /> */}
            <SignOut />
          </div>
        </div>
      </div>
    </div>
  );
}
