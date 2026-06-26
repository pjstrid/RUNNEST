import { Suspense } from "react";
import { getGroups, getCities, type GroupFilters } from "@/lib/groups";
import FilterBar from "@/components/FilterBar";
import GroupList from "@/components/GroupList";

type PageProps = {
  searchParams: Promise<GroupFilters>;
};

export const metadata = {
  title: "Hitta löpargrupp – RUNNEST",
  description:
    "Sök bland löpargrupper i din stad. Filtrera på nivå, underlag och dag.",
};

export default async function SokPage({ searchParams }: PageProps) {
  const filters = await searchParams;
  const [groups, cities] = await Promise.all([
    getGroups(filters),
    getCities(),
  ]);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading mb-1 text-3xl font-bold text-runnest-yellow">
          Hitta din löpargrupp
        </h1>
        <p className="mb-6 text-sm text-white/60">
          {groups.length} {groups.length === 1 ? "grupp" : "grupper"} hittades
        </p>

        <Suspense>
          <FilterBar cities={cities} filters={filters} />
        </Suspense>

        <GroupList groups={groups} />
      </div>
    </main>
  );
}
