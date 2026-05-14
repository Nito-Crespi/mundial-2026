import type { Team, Group } from '../types';

export const TEAMS: Team[] = [
  // Group A
  { name: 'México', code: 'mx', group: 'A' },
  { name: 'Sudáfrica', code: 'za', group: 'A' },
  { name: 'República de Corea', code: 'kr', group: 'A' },
  { name: 'República Checa', code: 'cz', group: 'A' },
  // Group B
  { name: 'Canadá', code: 'ca', group: 'B' },
  { name: 'Bosnia y Herzegovina', code: 'ba', group: 'B' },
  { name: 'Catar', code: 'qa', group: 'B' },
  { name: 'Suiza', code: 'ch', group: 'B' },
  // Group C
  { name: 'Brasil', code: 'br', group: 'C' },
  { name: 'Marruecos', code: 'ma', group: 'C' },
  { name: 'Haití', code: 'ht', group: 'C' },
  { name: 'Escocia', code: 'gb-sct', group: 'C' },
  // Group D
  { name: 'Estados Unidos', code: 'us', group: 'D' },
  { name: 'Paraguay', code: 'py', group: 'D' },
  { name: 'Australia', code: 'au', group: 'D' },
  { name: 'Turquía', code: 'tr', group: 'D' },
  // Group E
  { name: 'Alemania', code: 'de', group: 'E' },
  { name: 'Curazao', code: 'cw', group: 'E' },
  { name: 'Costa de Marfil', code: 'ci', group: 'E' },
  { name: 'Ecuador', code: 'ec', group: 'E' },
  // Group F
  { name: 'Países Bajos', code: 'nl', group: 'F' },
  { name: 'Japón', code: 'jp', group: 'F' },
  { name: 'Suecia', code: 'se', group: 'F' },
  { name: 'Túnez', code: 'tn', group: 'F' },
  // Group G
  { name: 'Bélgica', code: 'be', group: 'G' },
  { name: 'Egipto', code: 'eg', group: 'G' },
  { name: 'RI de Irán', code: 'ir', group: 'G' },
  { name: 'Nueva Zelanda', code: 'nz', group: 'G' },
  // Group H
  { name: 'España', code: 'es', group: 'H' },
  { name: 'Cabo Verde', code: 'cv', group: 'H' },
  { name: 'Arabia Saudí', code: 'sa', group: 'H' },
  { name: 'Uruguay', code: 'uy', group: 'H' },
  // Group I
  { name: 'Francia', code: 'fr', group: 'I' },
  { name: 'Senegal', code: 'sn', group: 'I' },
  { name: 'Irak', code: 'iq', group: 'I' },
  { name: 'Noruega', code: 'no', group: 'I' },
  // Group J
  { name: 'Argentina', code: 'ar', group: 'J' },
  { name: 'Argelia', code: 'dz', group: 'J' },
  { name: 'Austria', code: 'at', group: 'J' },
  { name: 'Jordania', code: 'jo', group: 'J' },
  // Group K
  { name: 'Portugal', code: 'pt', group: 'K' },
  { name: 'RD Congo', code: 'cd', group: 'K' },
  { name: 'Uzbekistán', code: 'uz', group: 'K' },
  { name: 'Colombia', code: 'co', group: 'K' },
  // Group L
  { name: 'Inglaterra', code: 'gb-eng', group: 'L' },
  { name: 'Croacia', code: 'hr', group: 'L' },
  { name: 'Ghana', code: 'gh', group: 'L' },
  { name: 'Panamá', code: 'pa', group: 'L' },
];

export const TEAM_MAP: Record<string, Team> = TEAMS.reduce(
  (acc, team) => {
    acc[team.name] = team;
    return acc;
  },
  {} as Record<string, Team>
);

export function getTeam(name: string): Team {
  return (
    TEAM_MAP[name] || {
      name,
      code: 'un', // fallback (UN flag) for placeholders
    }
  );
}

export const GROUPS: Group[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export function getTeamsByGroup(group: Group): Team[] {
  return TEAMS.filter((t) => t.group === group);
}
