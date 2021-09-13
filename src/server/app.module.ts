import { Module } from '@nestjs/common';
import { NextModule } from './next/next.module';

@Module({
  imports: [NextModule],
})
export class AppModule {}
