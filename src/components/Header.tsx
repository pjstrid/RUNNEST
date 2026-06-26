import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 py-3">
      <div className="mx-auto grid max-w-2xl grid-cols-3 items-center">
        <div />
        <Link href="/sok" className="flex justify-center">
          <Image
            src="/runnest-wordmark-transparent.png"
            alt="RUNNEST"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex justify-end">
          <Image
            src="/icon-192x192.png"
            alt=""
            width={32}
            height={32}
            className="rounded-md"
          />
        </div>
      </div>
    </header>
  );
}
