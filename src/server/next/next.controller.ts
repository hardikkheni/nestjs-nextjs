import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from './Next.service';

@Controller('/')
export class NextController {
  constructor(private nextService: NextService) {}

  @Get('api')
  api() {
    return {
      hello: 'world',
    };
  }

  @Get('*')
  async showHome(@Req() req: Request, @Res() res: Response) {
    await this.nextService.handler(req, res);
  }
}
