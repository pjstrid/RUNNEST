export type Niva = "nybörjare" | "motionär" | "avancerad";
export type Underlag = "asfalt" | "trail" | "blandat";
export type OppetFor = "alla" | "kvinnor" | "män";
export type TypAvGrupp = "social" | "prestation" | "blandat";

export interface Group {
  id: string;
  namn: string;
  ort: string;
  omrade: string | null;
  niva: Niva;
  tempo_min: number | null;
  tempo_max: number | null;
  underlag: Underlag;
  dagar: string[];
  tider: string | null;
  oppen_for: OppetFor;
  typ: TypAvGrupp;
  storlek: number | null;
  beskrivning: string | null;
  kontakt: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      groups: {
        Row: Group;
        Insert: Omit<Group, "id" | "created_at">;
        Update: Partial<Omit<Group, "id" | "created_at">>;
      };
    };
  };
}
