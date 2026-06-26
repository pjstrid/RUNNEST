import { notFound } from "next/navigation";
import Link from "next/link";
import { getGroup } from "@/lib/groups";
import type { Group } from "@/lib/types";

const NIVA_LABEL: Record<string, string> = {
  nybörjare: "Nybörjare",
  motionär: "Motionär",
  avancerad: "Avancerad",
};

const UNDERLAG_LABEL: Record<string, string> = {
  asfalt: "Asfalt",
  trail: "Trail",
  blandat: "Blandat",
};

const TYP_LABEL: Record<string, string> = {
  social: "Social",
  prestation: "Prestation",
  blandat: "Blandat",
};

const OPPEN_LABEL: Record<string, string> = {
  alla: "Alla välkomna",
  kvinnor: "Öppen för kvinnor",
  män: "Öppen för män",
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-100 py-3 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-runnest-blue">{value}</span>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = await getGroup(id);
  if (!group) return {};
  return {
    title: `${group.namn} – RUNNEST`,
    description: group.beskrivning ?? `Löpargrupp i ${group.ort}`,
  };
}

export default async function GruppPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group: Group | null = await getGroup(id);
  if (!group) notFound();

  const tempo =
    group.tempo_min && group.tempo_max
      ? `${group.tempo_min}–${group.tempo_max} min/km`
      : group.tempo_min
        ? `från ${group.tempo_min} min/km`
        : "Ej angivet";

  const location = [group.ort, group.omrade].filter(Boolean).join(", ");

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/sok"
          className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white/80"
        >
          ← Tillbaka till sökning
        </Link>

        <div className="mb-6 flex items-start justify-between gap-3">
          <h1 className="font-heading text-3xl font-bold leading-tight text-runnest-yellow">
            {group.namn}
          </h1>
          <span className="mt-1 shrink-0 rounded-full bg-runnest-yellow px-3 py-1 text-sm font-bold text-runnest-blue">
            {NIVA_LABEL[group.niva]}
          </span>
        </div>

        <p className="mb-6 text-white/60">{location}</p>

        {group.beskrivning && (
          <p className="mb-8 leading-relaxed text-white/80">
            {group.beskrivning}
          </p>
        )}

        <div className="mb-8 rounded-2xl bg-white p-5">
          <InfoRow label="Underlag" value={UNDERLAG_LABEL[group.underlag]} />
          <InfoRow label="Typ" value={TYP_LABEL[group.typ]} />
          <InfoRow label="Tempo" value={tempo} />
          <InfoRow
            label="Dagar"
            value={
              group.dagar.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(", ")
            }
          />
          {group.tider && <InfoRow label="Tider" value={group.tider} />}
          <InfoRow label="Öppen för" value={OPPEN_LABEL[group.oppen_for]} />
          {group.storlek && (
            <InfoRow label="Storlek" value={`~${group.storlek} personer`} />
          )}
        </div>

        <a
          href={group.kontakt}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-runnest-yellow py-3.5 text-center font-bold text-runnest-blue transition-colors hover:bg-runnest-yellow-light"
        >
          Kontakta gruppen
        </a>
      </div>
    </main>
  );
}
