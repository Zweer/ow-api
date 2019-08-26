import { ResponsePaginatedDto } from './responsePaginated.dto';
import { TeamDto } from './team.dto';

export interface ResponseTeamsDto extends ResponsePaginatedDto {
  data: TeamDto[];
}
