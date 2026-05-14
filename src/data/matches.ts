import type { Match } from '../types';

/**
 * All 104 matches of the FIFA World Cup 2026.
 * Times are in US Eastern Time (ET).
 */
export const MATCHES: Match[] = [
  // ─── Matchday 1 ───
  { id: 1, date: '2026-06-11', time: '15:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'México', awayTeam: 'Sudáfrica', stadiumId: 'mexico_city' },
  { id: 2, date: '2026-06-11', time: '22:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'República de Corea', awayTeam: 'República Checa', stadiumId: 'guadalajara' },

  { id: 3, date: '2026-06-12', time: '15:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Canadá', awayTeam: 'Bosnia y Herzegovina', stadiumId: 'toronto' },
  { id: 4, date: '2026-06-12', time: '21:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Estados Unidos', awayTeam: 'Paraguay', stadiumId: 'los_angeles' },

  { id: 5, date: '2026-06-13', time: '15:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Catar', awayTeam: 'Suiza', stadiumId: 'sf_bay' },
  { id: 6, date: '2026-06-13', time: '18:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Brasil', awayTeam: 'Marruecos', stadiumId: 'ny_nj' },
  { id: 7, date: '2026-06-13', time: '21:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Haití', awayTeam: 'Escocia', stadiumId: 'boston' },
  { id: 8, date: '2026-06-13', time: '00:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Australia', awayTeam: 'Turquía', stadiumId: 'vancouver' },

  { id: 9, date: '2026-06-14', time: '13:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Alemania', awayTeam: 'Curazao', stadiumId: 'houston' },
  { id: 10, date: '2026-06-14', time: '16:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Países Bajos', awayTeam: 'Japón', stadiumId: 'dallas' },
  { id: 11, date: '2026-06-14', time: '19:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Costa de Marfil', awayTeam: 'Ecuador', stadiumId: 'philadelphia' },
  { id: 12, date: '2026-06-14', time: '22:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Suecia', awayTeam: 'Túnez', stadiumId: 'monterrey' },

  { id: 13, date: '2026-06-15', time: '12:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'España', awayTeam: 'Cabo Verde', stadiumId: 'atlanta' },
  { id: 14, date: '2026-06-15', time: '15:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'Bélgica', awayTeam: 'Egipto', stadiumId: 'seattle' },
  { id: 15, date: '2026-06-15', time: '18:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'Arabia Saudí', awayTeam: 'Uruguay', stadiumId: 'miami' },
  { id: 16, date: '2026-06-15', time: '21:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'RI de Irán', awayTeam: 'Nueva Zelanda', stadiumId: 'los_angeles' },

  { id: 17, date: '2026-06-16', time: '15:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Francia', awayTeam: 'Senegal', stadiumId: 'ny_nj' },
  { id: 18, date: '2026-06-16', time: '18:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Irak', awayTeam: 'Noruega', stadiumId: 'boston' },
  { id: 19, date: '2026-06-16', time: '21:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Argentina', awayTeam: 'Argelia', stadiumId: 'kansas_city' },
  { id: 20, date: '2026-06-16', time: '00:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Austria', awayTeam: 'Jordania', stadiumId: 'sf_bay' },

  { id: 21, date: '2026-06-17', time: '13:00', stage: 'Fase de Grupos', group: 'K', homeTeam: 'Portugal', awayTeam: 'RD Congo', stadiumId: 'houston' },
  { id: 22, date: '2026-06-17', time: '16:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Inglaterra', awayTeam: 'Croacia', stadiumId: 'dallas' },
  { id: 23, date: '2026-06-17', time: '19:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Ghana', awayTeam: 'Panamá', stadiumId: 'toronto' },
  { id: 24, date: '2026-06-17', time: '22:00', stage: 'Fase de Grupos', group: 'K', homeTeam: 'Uzbekistán', awayTeam: 'Colombia', stadiumId: 'mexico_city' },

  // ─── Matchday 2 ───
  { id: 25, date: '2026-06-18', time: '12:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'República Checa', awayTeam: 'Sudáfrica', stadiumId: 'atlanta' },
  { id: 26, date: '2026-06-18', time: '15:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Suiza', awayTeam: 'Bosnia y Herzegovina', stadiumId: 'los_angeles' },
  { id: 27, date: '2026-06-18', time: '18:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Canadá', awayTeam: 'Catar', stadiumId: 'vancouver' },
  { id: 28, date: '2026-06-18', time: '21:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'México', awayTeam: 'República de Corea', stadiumId: 'guadalajara' },

  { id: 29, date: '2026-06-19', time: '15:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Estados Unidos', awayTeam: 'Australia', stadiumId: 'seattle' },
  { id: 30, date: '2026-06-19', time: '18:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Escocia', awayTeam: 'Marruecos', stadiumId: 'boston' },
  { id: 31, date: '2026-06-19', time: '21:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Brasil', awayTeam: 'Haití', stadiumId: 'philadelphia' },
  { id: 32, date: '2026-06-19', time: '00:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Turquía', awayTeam: 'Paraguay', stadiumId: 'sf_bay' },

  { id: 33, date: '2026-06-20', time: '13:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Países Bajos', awayTeam: 'Suecia', stadiumId: 'houston' },
  { id: 34, date: '2026-06-20', time: '16:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Alemania', awayTeam: 'Costa de Marfil', stadiumId: 'toronto' },
  { id: 35, date: '2026-06-20', time: '22:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Ecuador', awayTeam: 'Curazao', stadiumId: 'kansas_city' },
  { id: 36, date: '2026-06-20', time: '00:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Túnez', awayTeam: 'Japón', stadiumId: 'monterrey' },

  { id: 37, date: '2026-06-21', time: '12:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'España', awayTeam: 'Arabia Saudí', stadiumId: 'atlanta' },
  { id: 38, date: '2026-06-21', time: '15:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'Bélgica', awayTeam: 'RI de Irán', stadiumId: 'los_angeles' },
  { id: 39, date: '2026-06-21', time: '18:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'Uruguay', awayTeam: 'Cabo Verde', stadiumId: 'miami' },
  { id: 40, date: '2026-06-21', time: '21:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'Nueva Zelanda', awayTeam: 'Egipto', stadiumId: 'vancouver' },

  { id: 41, date: '2026-06-22', time: '13:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Argentina', awayTeam: 'Austria', stadiumId: 'dallas' },
  { id: 42, date: '2026-06-22', time: '17:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Francia', awayTeam: 'Irak', stadiumId: 'philadelphia' },
  { id: 43, date: '2026-06-22', time: '20:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Noruega', awayTeam: 'Senegal', stadiumId: 'ny_nj' },
  { id: 44, date: '2026-06-22', time: '23:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Jordania', awayTeam: 'Argelia', stadiumId: 'sf_bay' },

  { id: 45, date: '2026-06-23', time: '13:00', stage: 'Fase de Grupos', group: 'K', homeTeam: 'Portugal', awayTeam: 'Uzbekistán', stadiumId: 'houston' },
  { id: 46, date: '2026-06-23', time: '16:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Inglaterra', awayTeam: 'Ghana', stadiumId: 'boston' },
  { id: 47, date: '2026-06-23', time: '19:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Panamá', awayTeam: 'Croacia', stadiumId: 'toronto' },
  { id: 48, date: '2026-06-23', time: '22:00', stage: 'Fase de Grupos', group: 'K', homeTeam: 'Colombia', awayTeam: 'RD Congo', stadiumId: 'guadalajara' },

  // ─── Matchday 3 ───
  { id: 49, date: '2026-06-24', time: '15:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Suiza', awayTeam: 'Canadá', stadiumId: 'vancouver' },
  { id: 50, date: '2026-06-24', time: '15:00', stage: 'Fase de Grupos', group: 'B', homeTeam: 'Bosnia y Herzegovina', awayTeam: 'Catar', stadiumId: 'seattle' },
  { id: 51, date: '2026-06-24', time: '18:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Escocia', awayTeam: 'Brasil', stadiumId: 'miami' },
  { id: 52, date: '2026-06-24', time: '18:00', stage: 'Fase de Grupos', group: 'C', homeTeam: 'Marruecos', awayTeam: 'Haití', stadiumId: 'atlanta' },
  { id: 53, date: '2026-06-24', time: '21:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'República Checa', awayTeam: 'México', stadiumId: 'mexico_city' },
  { id: 54, date: '2026-06-24', time: '21:00', stage: 'Fase de Grupos', group: 'A', homeTeam: 'Sudáfrica', awayTeam: 'República de Corea', stadiumId: 'monterrey' },

  { id: 55, date: '2026-06-25', time: '16:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Curazao', awayTeam: 'Costa de Marfil', stadiumId: 'philadelphia' },
  { id: 56, date: '2026-06-25', time: '16:00', stage: 'Fase de Grupos', group: 'E', homeTeam: 'Ecuador', awayTeam: 'Alemania', stadiumId: 'ny_nj' },
  { id: 57, date: '2026-06-25', time: '19:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Japón', awayTeam: 'Suecia', stadiumId: 'dallas' },
  { id: 58, date: '2026-06-25', time: '19:00', stage: 'Fase de Grupos', group: 'F', homeTeam: 'Túnez', awayTeam: 'Países Bajos', stadiumId: 'kansas_city' },
  { id: 59, date: '2026-06-25', time: '22:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Turquía', awayTeam: 'Estados Unidos', stadiumId: 'los_angeles' },
  { id: 60, date: '2026-06-25', time: '22:00', stage: 'Fase de Grupos', group: 'D', homeTeam: 'Paraguay', awayTeam: 'Australia', stadiumId: 'sf_bay' },

  { id: 61, date: '2026-06-26', time: '15:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Noruega', awayTeam: 'Francia', stadiumId: 'boston' },
  { id: 62, date: '2026-06-26', time: '15:00', stage: 'Fase de Grupos', group: 'I', homeTeam: 'Senegal', awayTeam: 'Irak', stadiumId: 'toronto' },
  { id: 63, date: '2026-06-26', time: '20:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'Cabo Verde', awayTeam: 'Arabia Saudí', stadiumId: 'houston' },
  { id: 64, date: '2026-06-26', time: '20:00', stage: 'Fase de Grupos', group: 'H', homeTeam: 'Uruguay', awayTeam: 'España', stadiumId: 'guadalajara' },
  { id: 65, date: '2026-06-26', time: '23:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'Egipto', awayTeam: 'RI de Irán', stadiumId: 'seattle' },
  { id: 66, date: '2026-06-26', time: '23:00', stage: 'Fase de Grupos', group: 'G', homeTeam: 'Nueva Zelanda', awayTeam: 'Bélgica', stadiumId: 'vancouver' },

  { id: 67, date: '2026-06-27', time: '17:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Panamá', awayTeam: 'Inglaterra', stadiumId: 'ny_nj' },
  { id: 68, date: '2026-06-27', time: '17:00', stage: 'Fase de Grupos', group: 'L', homeTeam: 'Croacia', awayTeam: 'Ghana', stadiumId: 'philadelphia' },
  { id: 69, date: '2026-06-27', time: '19:30', stage: 'Fase de Grupos', group: 'K', homeTeam: 'Colombia', awayTeam: 'Portugal', stadiumId: 'miami' },
  { id: 70, date: '2026-06-27', time: '19:30', stage: 'Fase de Grupos', group: 'K', homeTeam: 'RD Congo', awayTeam: 'Uzbekistán', stadiumId: 'atlanta' },
  { id: 71, date: '2026-06-27', time: '22:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Argelia', awayTeam: 'Austria', stadiumId: 'kansas_city' },
  { id: 72, date: '2026-06-27', time: '22:00', stage: 'Fase de Grupos', group: 'J', homeTeam: 'Jordania', awayTeam: 'Argentina', stadiumId: 'dallas' },

  // ─── Round of 32 ───
  { id: 73, date: '2026-06-28', time: '—', stage: 'Dieciseisavos', homeTeam: '2º Grupo A', awayTeam: '2º Grupo B', stadiumId: 'los_angeles', isPlaceholder: true },
  { id: 74, date: '2026-06-29', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo E', awayTeam: '3º Grupo A/B/C/D/F', stadiumId: 'boston', isPlaceholder: true },
  { id: 75, date: '2026-06-29', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo F', awayTeam: '2º Grupo C', stadiumId: 'monterrey', isPlaceholder: true },
  { id: 76, date: '2026-06-29', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo C', awayTeam: '2º Grupo F', stadiumId: 'houston', isPlaceholder: true },
  { id: 77, date: '2026-06-30', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo I', awayTeam: '3º Grupo C/D/F/G/H', stadiumId: 'ny_nj', isPlaceholder: true },
  { id: 78, date: '2026-06-30', time: '—', stage: 'Dieciseisavos', homeTeam: '2º Grupo E', awayTeam: '2º Grupo I', stadiumId: 'dallas', isPlaceholder: true },
  { id: 79, date: '2026-06-30', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo A', awayTeam: '3º Grupo C/E/F/H/I', stadiumId: 'mexico_city', isPlaceholder: true },
  { id: 80, date: '2026-07-01', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo L', awayTeam: '3º Grupo E/H/I/J/K', stadiumId: 'atlanta', isPlaceholder: true },
  { id: 81, date: '2026-07-01', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo D', awayTeam: '3º Grupo B/E/F/I/J', stadiumId: 'sf_bay', isPlaceholder: true },
  { id: 82, date: '2026-07-01', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo G', awayTeam: '3º Grupo A/E/H/I/J', stadiumId: 'seattle', isPlaceholder: true },
  { id: 83, date: '2026-07-02', time: '—', stage: 'Dieciseisavos', homeTeam: '2º Grupo K', awayTeam: '2º Grupo L', stadiumId: 'toronto', isPlaceholder: true },
  { id: 84, date: '2026-07-02', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo H', awayTeam: '2º Grupo J', stadiumId: 'los_angeles', isPlaceholder: true },
  { id: 85, date: '2026-07-02', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo B', awayTeam: '3º Grupo E/F/G/I/J', stadiumId: 'vancouver', isPlaceholder: true },
  { id: 86, date: '2026-07-03', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo J', awayTeam: '2º Grupo H', stadiumId: 'miami', isPlaceholder: true },
  { id: 87, date: '2026-07-03', time: '—', stage: 'Dieciseisavos', homeTeam: '1º Grupo K', awayTeam: '3º Grupo D/E/I/J/L', stadiumId: 'kansas_city', isPlaceholder: true },
  { id: 88, date: '2026-07-03', time: '—', stage: 'Dieciseisavos', homeTeam: '2º Grupo D', awayTeam: '2º Grupo G', stadiumId: 'dallas', isPlaceholder: true },

  // ─── Round of 16 ───
  { id: 89, date: '2026-07-04', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 74', awayTeam: 'Ganador Partido 77', stadiumId: 'philadelphia', isPlaceholder: true },
  { id: 90, date: '2026-07-04', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 73', awayTeam: 'Ganador Partido 75', stadiumId: 'houston', isPlaceholder: true },
  { id: 91, date: '2026-07-05', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 76', awayTeam: 'Ganador Partido 78', stadiumId: 'ny_nj', isPlaceholder: true },
  { id: 92, date: '2026-07-05', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 79', awayTeam: 'Ganador Partido 80', stadiumId: 'mexico_city', isPlaceholder: true },
  { id: 93, date: '2026-07-06', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 83', awayTeam: 'Ganador Partido 84', stadiumId: 'dallas', isPlaceholder: true },
  { id: 94, date: '2026-07-06', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 81', awayTeam: 'Ganador Partido 82', stadiumId: 'seattle', isPlaceholder: true },
  { id: 95, date: '2026-07-07', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 86', awayTeam: 'Ganador Partido 88', stadiumId: 'atlanta', isPlaceholder: true },
  { id: 96, date: '2026-07-07', time: '—', stage: 'Octavos de Final', homeTeam: 'Ganador Partido 85', awayTeam: 'Ganador Partido 87', stadiumId: 'vancouver', isPlaceholder: true },

  // ─── Quarter-finals ───
  { id: 97, date: '2026-07-09', time: '—', stage: 'Cuartos de Final', homeTeam: 'Ganador Partido 89', awayTeam: 'Ganador Partido 90', stadiumId: 'boston', isPlaceholder: true },
  { id: 98, date: '2026-07-10', time: '—', stage: 'Cuartos de Final', homeTeam: 'Ganador Partido 93', awayTeam: 'Ganador Partido 94', stadiumId: 'los_angeles', isPlaceholder: true },
  { id: 99, date: '2026-07-11', time: '—', stage: 'Cuartos de Final', homeTeam: 'Ganador Partido 91', awayTeam: 'Ganador Partido 92', stadiumId: 'miami', isPlaceholder: true },
  { id: 100, date: '2026-07-11', time: '—', stage: 'Cuartos de Final', homeTeam: 'Ganador Partido 95', awayTeam: 'Ganador Partido 96', stadiumId: 'kansas_city', isPlaceholder: true },

  // ─── Semi-finals ───
  { id: 101, date: '2026-07-14', time: '—', stage: 'Semifinales', homeTeam: 'Ganador Partido 97', awayTeam: 'Ganador Partido 98', stadiumId: 'dallas', isPlaceholder: true },
  { id: 102, date: '2026-07-15', time: '—', stage: 'Semifinales', homeTeam: 'Ganador Partido 99', awayTeam: 'Ganador Partido 100', stadiumId: 'atlanta', isPlaceholder: true },

  // ─── Third-place play-off ───
  { id: 103, date: '2026-07-18', time: '—', stage: 'Tercer Puesto', homeTeam: 'Perdedor Partido 101', awayTeam: 'Perdedor Partido 102', stadiumId: 'miami', isPlaceholder: true },

  // ─── Final ───
  { id: 104, date: '2026-07-19', time: '—', stage: 'Final', homeTeam: 'Ganador Partido 101', awayTeam: 'Ganador Partido 102', stadiumId: 'ny_nj', isPlaceholder: true },
];
