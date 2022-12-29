import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  let { pathname } = useRouter();

  return (
    <header className="p-4 border-b border-gray-800 flex justify-between items-center text-sm font-semibold">
      <div className="space-x-6 flex items-center">
        <Link className="text-lg leading-none" href="/">
          ▲
        </Link>
        <Link
          className={
            pathname === "/about"
              ? "text-white"
              : "hover:text-white text-gray-400"
          }
          href="/about"
        >
          About
        </Link>
      </div>
    </header>
  );
}
