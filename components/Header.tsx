import Link from "next/link";

import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Tailwind CSS Blog">
          <div className="flex items-center justify-between">
            <div className="mr-3">logo</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          <Link href="/about">Blog</Link>
          <Link href="/about">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Contact</Link>
        </div>
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
