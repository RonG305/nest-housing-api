import { APP_URL } from "../constants";
import { PaginateOptions } from "./pagination.dto";



export const paginate = (totalItems: number, current_page:number = 1, pageSize:number = 10, url=''): PaginateOptions => {
   const totalPages = Math.ceil(totalItems / pageSize)

   if(current_page < 1) {
      current_page = 1;
   } else if(current_page > totalPages) {
      current_page = totalPages;
   }
   const startIndex = (current_page - 1) * pageSize;
   const endIndex = startIndex + pageSize;

   return {
      total: totalItems,
      current_page: current_page,
      last_page: totalPages,
      start_index: startIndex,
      end_index: endIndex,
      prev_page_url: current_page > 1 ? `${APP_URL}/${url}?page=${Number(current_page) - 1}&limit=${pageSize}` : null,
      next_page_url: current_page < totalPages ? `${APP_URL}/${url}?page=${Number(current_page) + 1}&limit=${pageSize}` : null,
      items_per_page: pageSize,
   };
};