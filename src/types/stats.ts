export type topHeroCategories = {
  played: string;
  gamesWon: string;
  winRate: string;
  weaponAccuracy: string;
  eliminationsPerLife: string;
  multikillBest: string;
  objectiveKillsAverage: string;
};

export interface TopHero extends Partial<topHeroCategories> {
  hero: string;
  image: string;
}

export type statsCategories = {
  combat: string;
  matchAwards: string;
  assists: string;
  average: string;
  miscellaneous: string;
  best: string;
  game: string;
};

export interface Stat {
  title: string;
  value: number;
}
