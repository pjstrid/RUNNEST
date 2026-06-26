import Link from "next/link";

export const metadata = {
  title: "RUNNEST – Hitta din löpargrupp",
  description:
    "RUNNEST samlar löpargrupper i Sverige. Hitta en grupp som passar din nivå, ditt tempo och dina dagar.",
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-heading mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
        Spring med andra.{" "}
        <span className="text-runnest-yellow">Hitta din grupp.</span>
      </h1>

      <p className="mb-10 max-w-sm text-base leading-relaxed text-white/70 sm:max-w-md">
        RUNNEST samlar löpargrupper i Sverige. Filtrera på nivå, underlag och
        dag — och hitta rätt sällskap på några sekunder.
      </p>

      <Link
        href="/sok"
        className="rounded-xl bg-runnest-yellow px-8 py-3.5 font-heading text-lg font-bold text-runnest-blue transition-colors hover:bg-runnest-yellow-light"
      >
        Hitta löpargrupp
      </Link>
    </main>
  );
}
