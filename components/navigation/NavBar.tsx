import { auth } from "@/auth";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import NotLoginToast from "../NotLoginToast";
import AuthAvtar from "./AuthAvtar";
import SignInBtn from "./authBtn/SignInBtn";
import SignOutBtn from "./authBtn/SignOutBtn";
import { ModeToggle } from "../themeToggle";

const NavBar = async () => {
  const session = await auth();
  const image = session?.user?.image || "/user.png";
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md p-4 sm:p-6 flex items-center justify-between">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 font-black text-gray-900 dark:text-white text-3xl"
      >
        <p className="font-black text-yellow-400 text-5xl px-2 sm:hidden">U</p>
        <p className="capitalize font-bold hidden sm:block">Urban</p>
        <span className="text-yellow-400 hidden sm:block">Shirts</span>
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex w-1/3">
        <Input
          placeholder="Search..."
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <ModeToggle />
        <NotLoginToast username={session?.user?.name} />

        <AuthAvtar image={image} />

        {session ? <SignOutBtn /> : <SignInBtn />}
      </div>
    </nav>
  );
};

export default NavBar;
