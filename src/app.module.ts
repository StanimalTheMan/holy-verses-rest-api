import { VerseModule } from './verse/verse.module';
// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [VerseModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
