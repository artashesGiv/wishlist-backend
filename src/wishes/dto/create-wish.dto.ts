import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator'

export class CreateWishDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsOptional()
  @IsUrl()
  link?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsNumber()
  price?: number
}
