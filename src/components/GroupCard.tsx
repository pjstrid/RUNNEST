import Link from "next/link";
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

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-runnest-blue/8 px-2.5 py-0.5 text-xs font-medium text-runnest-blue">
      {label}
    </span>
  );
}

export default function GroupCard({ group }: { group: Group }) {
  const tempo =
    group.tempo_min && group.tempo_max
      ? `${group.tempo_min}–${group.tempo_max} min/km`
      : group.tempo_min
        ? `från ${group.tempo_min} min/km`
        : null;

  const location = [group.ort, group.omrade].filter(Boolean).join(", ");

  return (
    <article className="flex flex-col rounded-2xl bg-white shadow-sm">
      <Link href={`/grupp/${group.id}`} className="flex flex-col p-5 pb-3">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h2 className="font-heading text-lg font-bold leading-tight text-runnest-blue">
            {group.namn}
          </h2>
          <span className="shrink-0 rounded-full bg-runnest-yellow px-2.5 py-0.5 text-xs font-bold text-runnest-blue">
            {NIVA_LABEL[group.niva]}
          </span>
        </div>

        <p className="mb-3 text-sm text-gray-500">{location}</p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          <Chip label={UNDERLAG_LABEL[group.underlag]} />
          <Chip label={TYP_LABEL[group.typ]} />
          {tempo && <Chip label={tempo} />}
          {group.storlek && <Chip label={`~${group.storlek} pers.`} />}
          {group.dagar.map((dag) => (
            <Chip key={dag} label={dag} />
          ))}
        </div>

        {group.beskrivning && (
          <p className="line-clamp-2 text-sm text-gray-600">
            {group.beskrivning}
          </p>
        )}
      </Link>

      <div className="px-5 pb-5">
        <a
          href={group.kontakt}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-runnest-yellow py-2.5 text-center text-sm font-bold text-runnest-blue transition-colors hover:bg-runnest-yellow-light"
        >
          Kontakta gruppen
        </a>
      </div>
    </article>
  );
}
