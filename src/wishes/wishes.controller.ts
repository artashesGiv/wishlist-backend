import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { WishesService } from './wishes.service'
import { CreateWishDto } from './dto/create-wish.dto'
import { UpdateWishDto } from './dto/update-wish.dto'
import { Wish } from './entities/wish.entity'

@Controller('wish')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @Post()
  create(@Body() createWishDto: CreateWishDto) {
    return this.wishesService.create(createWishDto)
  }

  @Get()
  async findAll(): Promise<Wish[]> {
    return await this.wishesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Wish> {
    return await this.wishesService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishesService.update(+id, updateWishDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishesService.remove(+id)
  }
}
