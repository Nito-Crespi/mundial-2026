import type { Stadium } from "../types";

export const STADIUMS: Stadium[] = [
  {
    id: "mexico_city",
    name: "Estadio Ciudad de México",
    city: "Ciudad de México",
    country: "México",
    lat: 19.303,
    lng: -99.1505,
  },
  {
    id: "guadalajara",
    name: "Estadio Guadalajara",
    city: "Guadalajara",
    country: "México",
    lat: 20.6817,
    lng: -103.4625,
  },
  {
    id: "monterrey",
    name: "Estadio Monterrey",
    city: "Monterrey",
    country: "México",
    lat: 25.6692,
    lng: -100.2444,
  },
  {
    id: "toronto",
    name: "Estadio Toronto",
    city: "Toronto",
    country: "Canadá",
    lat: 43.6332,
    lng: -79.4185,
  },
  {
    id: "vancouver",
    name: "Estadio BC Place Vancouver",
    city: "Vancouver",
    country: "Canadá",
    lat: 49.2768,
    lng: -123.1119,
  },
  {
    id: "los_angeles",
    name: "Estadio Los Ángeles",
    city: "Los Ángeles",
    country: "Estados Unidos",
    lat: 33.9534,
    lng: -118.3387,
  },
  {
    id: "sf_bay",
    name: "Estadio Bahía de San Francisco",
    city: "San Francisco",
    country: "Estados Unidos",
    lat: 37.4032,
    lng: -121.9697,
  },
  {
    id: "seattle",
    name: "Estadio Seattle",
    city: "Seattle",
    country: "Estados Unidos",
    lat: 47.5952,
    lng: -122.3316,
  },
  {
    id: "kansas_city",
    name: "Estadio Kansas City",
    city: "Kansas City",
    country: "Estados Unidos",
    lat: 39.0489,
    lng: -94.4839,
  },
  {
    id: "dallas",
    name: "Estadio Dallas",
    city: "Dallas",
    country: "Estados Unidos",
    lat: 32.7473,
    lng: -97.0945,
  },
  {
    id: "houston",
    name: "Estadio Houston",
    city: "Houston",
    country: "Estados Unidos",
    lat: 29.6847,
    lng: -95.4107,
  },
  {
    id: "atlanta",
    name: "Estadio Atlanta",
    city: "Atlanta",
    country: "Estados Unidos",
    lat: 33.7553,
    lng: -84.4006,
  },
  {
    id: "miami",
    name: "Estadio Miami",
    city: "Miami",
    country: "Estados Unidos",
    lat: 25.958,
    lng: -80.2389,
  },
  {
    id: "boston",
    name: "Estadio Boston",
    city: "Boston",
    country: "Estados Unidos",
    lat: 42.0909,
    lng: -71.2643,
  },
  {
    id: "philadelphia",
    name: "Estadio Filadelfia",
    city: "Filadelfia",
    country: "Estados Unidos",
    lat: 39.9008,
    lng: -75.1675,
  },
  {
    id: "ny_nj",
    name: "Estadio Nueva York Nueva Jersey",
    city: "East Rutherford, NJ",
    country: "Estados Unidos",
    lat: 40.8128,
    lng: -74.0742,
  },
];

export const STADIUM_MAP: Record<string, Stadium> = STADIUMS.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<string, Stadium>,
);

export const STADIUM_BY_NAME: Record<string, string> = {
  "Estadio Ciudad de México": "mexico_city",
  "Estadio Guadalajara": "guadalajara",
  "Estadio Monterrey": "monterrey",
  "Estadio Toronto": "toronto",
  "Estadio BC Place Vancouver": "vancouver",
  "Estadio Los Ángeles": "los_angeles",
  "Estadio Bahía de San Francisco": "sf_bay",
  "Estadio Bahía de San Francisco Bay": "sf_bay",
  "Estadio Seattle": "seattle",
  "Estadio Kansas City": "kansas_city",
  "Estadio Dallas": "dallas",
  "Estadio Houston": "houston",
  "Estadio Atlanta": "atlanta",
  "Estadio Miami": "miami",
  "Estadio Boston": "boston",
  "Estadio Filadelfia": "philadelphia",
  "Estadio Nueva York Nueva Jersey": "ny_nj",
};

export function getStadium(id: string): Stadium | undefined {
  return STADIUM_MAP[id];
}
