import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 py-2">
      <div className="mx-auto grid max-w-2xl grid-cols-3 items-center">
        <div className="flex justify-start">
          <div className="h-24 overflow-hidden flex items-center">
            <Image
              src="/icon-512x512.png"
              alt=""
              width={128}
              height={128}
              className="w-auto h-24"
            />
          </div>
        </div>
        <Link href="/sok" className="flex justify-center">
          <div className="h-24 overflow-hidden flex items-center justify-center">
            <Image
              src="/runnest-wordmark-transparent.png"
              alt="RUNNEST"
              width={600}
              height={200}
              priority
              className="h-48 w-auto"
            />
          </div>
        </Link>
        <div />
      </div>
    </header>
  );
}
