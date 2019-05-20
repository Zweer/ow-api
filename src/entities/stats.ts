import { Stat, statsCategories, TopHero, topHeroCategories } from '../types/stats';

class SingleStats {
  readonly topHeroes: { [category in keyof topHeroCategories]?: TopHero[] } = {};
  readonly categories: { [category in keyof statsCategories]?: Stat[] } = {};
}

export class Stats {
  quickplay: SingleStats = new SingleStats();
  competitive: SingleStats = new SingleStats();
}
