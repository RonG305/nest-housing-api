import { IsNumber, IsString } from 'class-validator';

export class PaginateOptions {
  @IsNumber()
  total: number;

  @IsNumber()
  current_page?: number;

  @IsNumber()
  last_page?: number;

  @IsNumber()
  start_index: number;

  @IsNumber()
  end_index?: number;

  @IsString()
  prev_page_url: string | null;
  @IsString()
  next_page_url?: string | null;

  @IsNumber()
  items_per_page?: number;

  @IsNumber()
  pageSize?: number;

  url?: string;

  data?: any[];
}
