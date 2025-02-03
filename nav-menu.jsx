import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  // UserButton
  SignedIn,
  SignedOut
} from "@clerk/nextjs";
export const NavMenu = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            {/* <h1 className="text-xl font-semibold text-[var(--foreground)]"> */}
            <h1 className="text-xl font-black tracking-widest text-[var(--foreground)]">
              Resolvo 
            </h1>
          </div>
          <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal"/>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard"> Dashboard</Link>
                <Link href="/user-profile"> Profile</Link>
                {/* <UserButton /> */}
                <SignOutButton/>
              </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};