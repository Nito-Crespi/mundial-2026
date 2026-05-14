import moment from "moment";
import type { Group, GroupStanding, Match, MatchResult } from "../types";
import { MATCHES } from "../data/matches";
import { getTeamsByGroup } from "../data/teams";

moment.defineLocale("es", {
  months:
    "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
      "_",
    ),
  monthsShort:
    "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
  },
  week: { dow: 1, doy: 4 },
});
moment.locale("es");

export function flagUrl(
  code: string,
  size: "w20" | "w40" | "w80" = "w40",
): string {
  return `https://flagcdn.com/${size}/${code}.png`;
}

export function formatDateLong(date: string): string {
  return moment(date).format("dddd, D [de] MMMM YYYY");
}

export function formatDateShort(date: string): string {
  return moment(date).format("DD MMM");
}

export function dayOfWeek(date: string): string {
  return moment(date).format("dddd");
}

export function computeGroupStandings(
  group: Group,
  results: Record<number, MatchResult>,
): GroupStanding[] {
  const teams = getTeamsByGroup(group);
  const standings: Record<string, GroupStanding> = {};

  for (const t of teams) {
    standings[t.name] = {
      team: t.name,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    };
  }

  const groupMatches = MATCHES.filter(
    (m) => m.group === group && !m.isPlaceholder,
  );

  for (const match of groupMatches) {
    const result = results[match.id];
    if (!result) continue;

    const home = standings[match.homeTeam];
    const away = standings[match.awayTeam];
    if (!home || !away) continue;

    home.played += 1;
    away.played += 1;
    home.goalsFor += result.homeGoals;
    home.goalsAgainst += result.awayGoals;
    away.goalsFor += result.awayGoals;
    away.goalsAgainst += result.homeGoals;

    if (result.homeGoals > result.awayGoals) {
      home.won += 1;
      home.points += 3;
      away.lost += 1;
    } else if (result.homeGoals < result.awayGoals) {
      away.won += 1;
      away.points += 3;
      home.lost += 1;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  }

  for (const s of Object.values(standings)) {
    s.goalDifference = s.goalsFor - s.goalsAgainst;
  }

  return Object.values(standings).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference)
      return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    return a.team.localeCompare(b.team);
  });
}

export function groupMatches(matches: Match[]): Record<string, Match[]> {
  const out: Record<string, Match[]> = {};
  for (const m of matches) {
    out[m.date] = out[m.date] || [];
    out[m.date].push(m);
  }
  for (const date of Object.keys(out)) {
    out[date].sort((a, b) => a.time.localeCompare(b.time));
  }
  return out;
}

export function uniqueSortedDates(matches: Match[]): string[] {
  return Array.from(new Set(matches.map((m) => m.date))).sort();
}
