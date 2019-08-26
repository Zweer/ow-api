import {ResponseDto} from "./response.dto";

export interface ResponsePaginatedDto extends ResponseDto {
  meta: {
    count: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
