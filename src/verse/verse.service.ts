import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVerseDto } from './dto/create-verse.dto';
import { UpdateVerseDto } from './dto/update-verse.dto';
import { Verse, VerseDocument } from './schemas/verse.schema';

@Injectable()
export class VerseService {
  constructor(
    @InjectModel(Verse.name) private readonly model: Model<VerseDocument>,
  ) {}

  async findAll(): Promise<Verse[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Verse> {
    return await this.model.findById(id).exec();
  }

  async create(createVerseDto: CreateVerseDto): Promise<Verse> {
    return await new this.model({
      ...createVerseDto,
    }).save();
  }

  async update(id: string, updateVerseDto: UpdateVerseDto): Promise<Verse> {
    return await this.model.findByIdAndUpdate(id, updateVerseDto).exec();
  }

  async delete(id: string): Promise<Verse> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
