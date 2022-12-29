import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ user }: { user: { name: string } }) {
  let { pathname } = useRouter();

  console.log({ pathname });

  return (
    <header className="p-4 border-b border-gray-800 flex justify-between items-center text-sm font-semibold">
      <div className="space-x-6 flex items-center">
        <Link className="text-lg leading-none" href="/">
          ▲
        </Link>
        <Link
          className={`text-gray-400 ${
            pathname === "/about" ? "text-white" : "hover:text-white"
          }`}
          href="/about"
        >
          About
        </Link>
      </div>
      <span className="text-gray-400">Welcome, {user.name}!</span>
    </header>
  );
}