import type { Group } from "@/lib/types";
import GroupCard from "./GroupCard";

export default function GroupList({ groups }: { groups: Group[] }) {
  if (groups.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-white/60 text-sm">
          Inga grupper hittades. Prova att justera dina filter.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4">
      {groups.map((group) => (
        <li key={group.id}>
          <GroupCard group={group} />
        </li>
      ))}
    </ul>
  );
}
