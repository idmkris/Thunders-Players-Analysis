// player-summary.interface.ts

export interface PlayerSummary {
  games: GameSummary[];
  name: string;
}

export interface GameSummary {
  date: string;
  isStarter: boolean;
  minutes: number;
  points: number;
  assists: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  steals: number;
  blocks: number;
  turnovers: number;
  defensiveFouls: number;
  offensiveFouls: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  twoPointersMade: number;
  twoPointersAttempted: number;
  threePointersMade: number;
  threePointersAttempted: number;
  shots: ShotSummary[];
}

export interface ShotSummary {
  isMake: boolean;
  locationX: number;
  locationY: number;
}
