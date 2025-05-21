import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { paginate } from 'src/common/pagination/paginate';
import { PaginationQueryDto } from 'src/common/pagination/paginationQuery.dto';

@Injectable()
export class HouseService {
  constructor(private readonly prisma: PrismaService){}
  async create(createHouseDto: CreateHouseDto) {
    const house =  await this.prisma.house.create({
     data: {
      ...createHouseDto
     }
    })
    return house
  }



 async  getAllHouses({limit, page}: PaginationQueryDto) {
  const totalhouses = await this.prisma.house.count()
  const url =  `house/get_houses`
  const pagination = paginate(totalhouses, page, limit, url)

  if(!limit) limit = 10
  if(!page) page = 1
 
  const houses = await this.prisma.house.findMany({
    skip: Number(page),
    take: Number(limit)
  })

  console.log("Pagination Query: ", limit, page)
    return {
      data: houses,
      ...pagination
    }
  }

  async findHouseById(id: string) {
    const house = await this.prisma.house.findUnique({
      where: {id}
    })
    return house
  }

 async  updateHouse(id: string, updateHouseDto: UpdateHouseDto) {
  const updatedHouse = await this.prisma.house.update({
    where: {id},
    data: {
      ...updateHouseDto
    }
  })
    return updatedHouse;
  }

  async removeHouse(id: string) {
    const house = await this.prisma.house.delete({
      where: {id}
    })
    return  {
      message: "House deleted succesifully",
      data: house
    }
  }
}
