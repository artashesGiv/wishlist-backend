import { Injectable } from '@nestjs/common'
import { CreateWishDto } from './dto/create-wish.dto'
import { UpdateWishDto } from './dto/update-wish.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Wish } from './entities/wish.entity'

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private wishRepository: Repository<Wish>,
  ) {}

  async create(createWishDto: CreateWishDto) {
    console.log(createWishDto)
    return 'This action adds a new wish'
  }

  async findAll(): Promise<Wish[]> {
    return await this.wishRepository.find()
  }

  async findOne(id: number) {
    return await this.wishRepository.findOneBy({ id })
  }

  async update(id: number, updateWishDto: UpdateWishDto) {
    console.log(updateWishDto)
    return `This action updates a #${id} wish`
  }

  async remove(id: number) {
    return `This action removes a #${id} wish`
  }
}
