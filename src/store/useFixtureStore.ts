import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MatchResult } from "../types";

interface FixtureState {
  results: Record<number, MatchResult>;
  setResult: (matchId: number, result: MatchResult) => void;
  clearResult: (matchId: number) => void;
  resetAll: () => void;
}

export const useFixtureStore = create<FixtureState>()(
  persist(
    (set) => ({
      results: {},
      setResult: (matchId, result) =>
        set((state) => ({
          results: { ...state.results, [matchId]: result },
        })),
      clearResult: (matchId) =>
        set((state) => {
          const next = { ...state.results };
          delete next[matchId];
          return { results: next };
        }),
      resetAll: () => set({ results: {} }),
    }),
    { name: "mundial-2026-fixture" },
  ),
);
