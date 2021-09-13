import { Module } from '@nestjs/common';
import { NextService } from './Next.service';
import { NextController } from './next.controller';

@Module({
  providers: [NextService],
  controllers: [NextController],
})
export class NextModule {}
