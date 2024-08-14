import { IsNotEmpty, IsString } from 'class-validator'

export class CreateWishDto {
  @IsNotEmpty()
  @IsString()
  title: string
}
