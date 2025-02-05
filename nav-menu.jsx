import Link from "next/link";
// import {
//   SignInButton,
//   SignOutButton,
//   // UserButton
//   SignedIn,
//   SignedOut
// } from "@clerk/nextjs";

const NavMenu = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            {/* <h1 className="text-xl font-semibold text-[var(--foreground)]"> */}
            <h1 className="text-xl font-black tracking-widest text-[var(--foreground)]
                          font-[family-name:var(--font-geist-sans)]
            ">
              Resolvo 
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-up"> 
              <button className="px-2 py-1 text-sm border border-neutral-300 
                              dark:border-neutral-600 dark:text-neutral-200 
                              dark:hover:bg-neutral-700">
                Get Started
              </button>
            </Link>

            <Link href="/sign-up"> 
              <button className="px-2 py-1 text-sm border border-neutral-300 
                              dark:border-neutral-600 dark:text-neutral-200 
                              dark:hover:bg-neutral-700">
                Get Started
              </button>
            </Link>

            <Link href="/dashboard"> 
              <button className="px-2 py-1 text-sm border border-neutral-300 
                              dark:border-neutral-600 dark:text-neutral-200 
                              dark:hover:bg-neutral-700">
                Dashboard
              </button>
            </Link>

            <Link href="/profile"> 
              <button className="px-2 py-1 text-sm border border-neutral-300 
                              dark:border-neutral-600 dark:text-neutral-200 
                              dark:hover:bg-neutral-700">
                Profile
              </button>
            </Link>

            <Link href="/sign-in">
            <button className="px-2 py-1 text-sm border border-neutral-300 
                              dark:border-neutral-600 dark:text-neutral-200 
                              dark:hover:bg-neutral-700">
                Login
              </button>
            </Link>
              {/* <SignedOut>
                <SignInButton mode="modal"/>
              </SignedOut> */}
              {/* <SignedIn> */}
                {/* <Link href="/dashboard"> Dashboard</Link>
                <Link href="/user-profile"> Profile</Link> */}
                {/* <UserButton /> */}
                {/* <SignOutButton/> */}
              {/* </SignedIn> */}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default NavMenu;