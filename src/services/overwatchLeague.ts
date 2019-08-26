import axios from 'axios';

import { ResponseTeamsDto } from '../dtos/response-teams.dto';
import { ResponseTeamDto } from '../dtos/response-team.dto';

import { Team } from '../entities/team';

export type locale = 'de_DE' | 'en_US' | 'en_GB' | 'es_ES' | 'es_MX' | 'fr_FR' | 'it_IT' | 'pt_BR' | 'pl_PL' | 'ru_RU' | 'ko_KR' | 'ja_JP' | 'zh_TW' | 'zh_CH';

export class OverwatchLeague {
  private static ENDPOINT: string = 'https://api.overwatchleague.com';
  private static ENDPOINT_CHINA: string = 'https://api.overwatchleague.cn';

  constructor(private locale: locale = 'en_US', private useChina: boolean = false) {}

  get endpoint(): string {
    return this.useChina ? OverwatchLeague.ENDPOINT_CHINA : OverwatchLeague.ENDPOINT;
  }

  async request<T>(url): Promise<T> {
    const { data } = await axios.get<T>(`${this.endpoint}/${url}`);

    return data;
  }

  async getTeams(): Promise<Team[]> {
    const { data: teams } = await this.request<ResponseTeamsDto>('v2/teams');

    return teams.map(team => Team.factory(team));
  }

  async getTeam(teamId: number): Promise<Team> {
    try {
      const { data: team } = await this.request<ResponseTeamDto>(`v2/teams/${teamId}`);

      return Team.factory(team);
    } catch {
      throw new Error('Invalid team');
    }
  }
}
