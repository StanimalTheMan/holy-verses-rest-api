import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Verse, VerseDocument } from './schemas/verse.schema';

@Injectable()
export class VerseService {
  constructor(
    @InjectModel(Verse.name) private readonly model: Model<VerseDocument>,
  ) {}
}
