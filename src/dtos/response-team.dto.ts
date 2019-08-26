import { ResponseDto } from './response.dto';
import { TeamFullDto } from './teamFull.dto';

export interface ResponseTeamDto extends ResponseDto {
  data: TeamFullDto;
  meta: {
    strings: { [key: string]: string };
  };
}
