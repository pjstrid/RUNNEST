import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 px-4 py-3">
      <div className="mx-auto flex max-w-2xl items-center">
        <Link href="/sok">
          <Image
            src="/runnest-wordmark-transparent.png"
            alt="RUNNEST"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
