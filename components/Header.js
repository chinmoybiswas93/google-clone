import Link from "next/link";
import User from "./User";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 p-4">
        <div className="flex gap-4 items-center">
          <p>
            <Link href={"/"}>About</Link>
          </p>
          <p>
            <Link href={"/"}>GitHub</Link>
          </p>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <p>
            <Link href={"/"}>Gmail</Link>
          </p>
          <p>
            <Link href={"/"}>Images</Link>
          </p>
          <User></User>
        </div>
      </div>
    </header>
  );
}
