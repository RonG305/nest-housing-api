import {
  IsArray,
  IsDecimal,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';

enum Structure {
  CONCRETE = 'concrete',
  STONE = 'stone',
  BRICK = 'brick',
  STEEL_FRAME = 'steel frame',
  PRECAST = 'precast',
}

enum Status {
  PENDING = 'pending',
  APPROVED = 'approved',
}

export class CreateHouseDto {

  @IsString()
  housename: string;

  @IsString()
  description: string;

  @IsNumber()
  number_of_bedrooms: number;

  @IsString()
  county: string;

  @IsString()
  subcounty: string;

  @IsString()
  ward: string;

  @IsNumber()
  size: number;

  @IsNumber()
  bathrooms: number;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  num_of_units: number;

  @IsNumber()
  floors: number;

  @IsEnum(Structure)
  structure: Structure;

  @IsDecimal()
  longitude: number;

  @IsDecimal()
  latitude: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsEnum(Status)
  status: Status;
}
