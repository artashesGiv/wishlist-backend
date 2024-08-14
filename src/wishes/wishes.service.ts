import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateWishDto } from './dto/create-wish.dto'
import { UpdateWishDto } from './dto/update-wish.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Wish } from './entities/wish.entity'
import { createExceptionFromError } from '../utils/error.util'

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private wishRepository: Repository<Wish>,
  ) {}

  async create(createWishDto: CreateWishDto) {
    try {
      const wish = this.wishRepository.create(createWishDto)
      return await this.wishRepository.save(wish)
    } catch (error) {
      throw createExceptionFromError(error, 'Filed to create wishes')
    }
  }

  async findAll(): Promise<Wish[]> {
    try {
      return await this.wishRepository.find()
    } catch (error) {
      throw createExceptionFromError(error, 'Filed to retrieved wishes')
    }
  }

  async findOne(id: number) {
    try {
      const wish = await this.wishRepository.findOneBy({ id })
      if (!wish) {
        throw new NotFoundException(`Wish with id ${id} not found`)
      }

      return wish
    } catch (error) {
      throw createExceptionFromError(error, 'Filed to retrieved wish')
    }
  }

  async update(id: number, updateWishDto: UpdateWishDto) {
    try {
      const wish = await this.wishRepository.findOneBy({ id })
      if (!wish) {
        throw new NotFoundException(`Wish with id ${id} not found`)
      }

      Object.assign(wish, updateWishDto)
      return await this.wishRepository.save(wish)
    } catch (error) {
      throw createExceptionFromError(error, 'Filed to update wish')
    }
  }

  async remove(id: number) {
    try {
      const wish = await this.wishRepository.findOneBy({ id })
      const result = await this.wishRepository.delete(id)

      if (result.affected === 0) {
        throw new NotFoundException(`Wish with id ${id} not found`)
      }

      return wish
    } catch (error) {
      throw createExceptionFromError(error, 'Filed to delete wish')
    }
  }
}
