import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 py-2">
      <div className="mx-auto grid max-w-2xl grid-cols-3 items-center">
        <div className="flex justify-start">
          <div className="h-10 overflow-hidden flex items-center">
            <Image
              src="/icon-192x192.png"
              alt=""
              width={64}
              height={64}
              className="w-auto h-16"
            />
          </div>
        </div>
        <Link href="/sok" className="flex justify-center">
          <div className="h-10 overflow-hidden flex items-center justify-center">
            <Image
              src="/runnest-wordmark-transparent.png"
              alt="RUNNEST"
              width={140}
              height={40}
              priority
              className="h-32 w-auto"
            />
          </div>
        </Link>
        <div />
      </div>
    </header>
  );
}
