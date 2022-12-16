import { Module } from '@nestjs/common';
import { VerseService } from './verse.service';
import { VerseController } from './verse.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Verse, VerseSchema } from './schemas/verse.schema';

@Module({
  providers: [VerseService],
  controllers: [VerseController],
  imports: [
    MongooseModule.forFeature([{ name: Verse.name, schema: VerseSchema }]),
  ],
})
export class VerseModule {}
