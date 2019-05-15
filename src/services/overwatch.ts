import axios from 'axios';
import * as cheerio from 'cheerio';

import { platform, region } from '../types/overwatch';

class Overwatch {
  private readonly baseUrl = 'https://playoverwatch.com/en-us/career';

  private getUrl(platform: platform, tag: string, region?: region): string {
    return `${this.baseUrl}/${platform}/${platform === 'pc' ? `${region}/` : ''}${tag}`;
  }

  private validateTag(tag: string): boolean {
    if (tag.match(/(\w+)-(\d+)/)) {
      return true;
    }

    throw new Error('Invalid tag: it must be something like Foo-123');
  }

  async getProfile(platform: platform, tag: string, region?: region) {
    const $ = await this.request(platform, tag, region);

    return $('.header-masthead').text();
  }

  private async request(platform: platform, tag: string, region?: region) {
    const { data } = await axios.get(this.getUrl(platform, tag, region), {
      responseType: 'text',
    });

    return cheerio.load(data);
  }
}

export const overwatch = new Overwatch();
