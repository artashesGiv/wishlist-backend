import { Injectable } from '@nestjs/common'
import { CreateWishDto } from './dto/create-wish.dto'
import { UpdateWishDto } from './dto/update-wish.dto'

const wishes = [
  {
    id: 1,
    title: 'wish 1',
  },
  {
    id: 2,
    title: 'wish 2',
  },
  {
    id: 3,
    title: 'wish 3',
  },
  {
    id: 4,
    title: 'wish 4',
  },
]

@Injectable()
export class WishesService {
  create(createWishDto: CreateWishDto) {
    console.log(createWishDto)
    return 'This action adds a new wish'
  }

  findAll() {
    return wishes
  }

  findOne(id: number) {
    return wishes.find(item => item.id === id)
  }

  update(id: number, updateWishDto: UpdateWishDto) {
    console.log(updateWishDto)
    return `This action updates a #${id} wish`
  }

  remove(id: number) {
    return `This action removes a #${id} wish`
  }
}
