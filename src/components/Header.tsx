import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 py-3">
      <div className="mx-auto flex max-w-2xl items-center gap-2.5">
        <Link href="/sok" className="flex items-center gap-2.5">
          <Image
            src="/icon-192x192.png"
            alt="RUNNEST"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-heading text-xl font-bold tracking-wide text-runnest-yellow">
            RUNNEST
          </span>
        </Link>
      </div>
    </header>
  );
}
