"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { GroupFilters } from "@/lib/groups";

const NIVA_OPTIONS = ["nybörjare", "motionär", "avancerad"];
const UNDERLAG_OPTIONS = ["asfalt", "trail", "blandat"];
const DAG_OPTIONS = [
  "måndag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
  "söndag",
];

interface FilterBarProps {
  cities: string[];
  filters: GroupFilters;
}

const selectClass =
  "w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:border-runnest-yellow focus:outline-none";

export default function FilterBar({ cities, filters }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/sok?${params.toString()}`);
    },
    [router, searchParams],
  );

  const hasFilters = !!(
    filters.ort ||
    filters.niva ||
    filters.underlag ||
    filters.dag
  );

  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <select
          value={filters.ort ?? ""}
          onChange={(e) => updateFilter("ort", e.target.value)}
          className={selectClass}
        >
          <option value="">Alla städer</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          value={filters.niva ?? ""}
          onChange={(e) => updateFilter("niva", e.target.value)}
          className={selectClass}
        >
          <option value="">Alla nivåer</option>
          {NIVA_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n.charAt(0).toUpperCase() + n.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={filters.underlag ?? ""}
          onChange={(e) => updateFilter("underlag", e.target.value)}
          className={selectClass}
        >
          <option value="">Allt underlag</option>
          {UNDERLAG_OPTIONS.map((u) => (
            <option key={u} value={u}>
              {u.charAt(0).toUpperCase() + u.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={filters.dag ?? ""}
          onChange={(e) => updateFilter("dag", e.target.value)}
          className={selectClass}
        >
          <option value="">Alla dagar</option>
          {DAG_OPTIONS.map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {hasFilters && (
        <button
          onClick={() => router.push("/sok")}
          className="mt-2 text-xs text-white/50 underline hover:text-white/80"
        >
          Rensa filter
        </button>
      )}
    </div>
  );
}
