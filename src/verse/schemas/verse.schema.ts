import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VerseDocument = Verse & Document;

@Schema()
export class Verse {
  @Prop({ required: true })
  book: string;

  @Prop({ required: true })
  chapter: number;

  @Prop({ required: true })
  verses: number[];

  @Prop({ required: true })
  content: string;
}

export const VerseSchema = SchemaFactory.createForClass(Verse);
