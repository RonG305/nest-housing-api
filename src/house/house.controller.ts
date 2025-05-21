import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PaginationQueryDto } from 'src/common/pagination/paginationQuery.dto';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post('create_house')
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.houseService.create(createHouseDto);
  }

  @Get('get_houses')
  getAllHouses(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.houseService.getAllHouses(paginationQueryDto);
  }

  @Get(':id')
  findHouseById(@Param('id') id: string) {
    return this.houseService.findHouseById(id);
  }

  @Patch(':id')
  updateHouse(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.houseService.updateHouse(id, updateHouseDto);
  }

  @Delete(':id')
  removeHouse(@Param('id') id: string) {
    return this.houseService.removeHouse(id);
  }
}
