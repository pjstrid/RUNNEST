import { supabase } from "./supabase";
import type { Group } from "./types";

export interface GroupFilters {
  ort?: string;
  niva?: string;
  underlag?: string;
  dag?: string;
}

export async function getGroups(filters: GroupFilters = {}): Promise<Group[]> {
  let query = supabase.from("groups").select("*").order("namn");
  if (filters.ort) query = query.eq("ort", filters.ort);
  if (filters.niva) query = query.eq("niva", filters.niva);
  if (filters.underlag) query = query.eq("underlag", filters.underlag);
  if (filters.dag) query = query.contains("dagar", [filters.dag]);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getGroup(id: string): Promise<Group | null> {
  const { data, error } = await supabase
    .from("groups")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

export async function getCities(): Promise<string[]> {
  const { data, error } = await supabase
    .from("groups")
    .select("ort")
    .returns<{ ort: string }[]>();
  if (error) return [];
  return [...new Set(data?.map((r) => r.ort) ?? [])].sort();
}
