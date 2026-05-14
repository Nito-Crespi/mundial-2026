export type Group =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L";

export type Stage =
  | "Fase de Grupos"
  | "Dieciseisavos"
  | "Octavos de Final"
  | "Cuartos de Final"
  | "Semifinales"
  | "Tercer Puesto"
  | "Final";

export interface Team {
  name: string;
  group?: Group;
}

export interface Stadium {
  id: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface Match {
  id: number;
  date: string; // ISO date string e.g. "2026-06-11"
  time: string; // ET time, e.g. "15:00"
  stage: Stage;
  group?: Group;
  homeTeam: string;
  awayTeam: string;
  stadiumId: string;
  isPlaceholder?: boolean;
}

export interface MatchResult {
  homeGoals: number;
  awayGoals: number;
}

export interface GroupStanding {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}
