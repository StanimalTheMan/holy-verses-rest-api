import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateVerseDto } from './dto/create-verse.dto';
import { UpdateVerseDto } from './dto/update-verse.dto';
import { VerseService } from './verse.service';

@Controller('verses')
export class VerseController {
  constructor(private readonly service: VerseService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createVerseDto: CreateVerseDto) {
    return await this.service.create(createVerseDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVerseDto: UpdateVerseDto,
  ) {
    return await this.service.update(id, updateVerseDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
