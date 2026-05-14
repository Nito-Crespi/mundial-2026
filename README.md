# ⚽ Mundial 2026 · Fixture

Fixture interactivo de la Copa Mundial de la FIFA 2026™ construido con **React + Vite + TypeScript + Ant Design + Zustand + React Router + Moment**.

## ✨ Características

- 📅 **Listado de los 104 partidos** de toda la copa (fase de grupos + nocaut)
- 🚩 **Banderas de cada país** (vía [flagcdn.com](https://flagcdn.com))
- 🔎 **Filtros**: por equipo, grupo, fase, estadio, fecha y búsqueda libre
- 🏆 **Tabla de posiciones por grupo** con cálculo automático de puntos, diferencia de goles, etc.
- ⚽ **Marca resultados** y ve cómo cambia la tabla en tiempo real (persistido en `localStorage` con Zustand)
- 🏟️ **16 estadios** con coordenadas y enlace directo a Google Maps
- 🌐 Routing con **React Router DOM** (`/`, `/grupos`, `/estadios`)
- 🕒 Fechas en español con **Moment**
- 🎨 UI en español con tema Ant Design personalizado

## 🚀 Cómo correr

```bash
npm install
npm run dev
```

Luego abrí http://localhost:5173

## 🛠️ Build

```bash
npm run build
npm run preview
```

## 📁 Estructura

```
src/
├── components/      # Flag, Navigation, MatchCard
├── data/            # matches.ts, teams.ts, stadiums.ts
├── pages/           # MatchesPage, GroupsPage, StadiumsPage
├── store/           # Zustand store con persist
├── types/           # interfaces TypeScript
├── utils/           # helpers (formato de fechas, standings)
├── App.tsx
└── main.tsx
```

## 📝 Notas

- Todos los horarios están en hora del **Este de Estados Unidos (ET)**.
- Los partidos de las fases eliminatorias muestran *placeholders* (ej. *"Ganador Partido 89"*) hasta que se definan los clasificados.
- Los resultados que marques se guardan localmente en tu navegador.
