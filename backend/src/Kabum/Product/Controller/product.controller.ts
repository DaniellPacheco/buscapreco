import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('product')
export class ProcutController {
  @Post('/')
  public async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const { productLink } = request.body;
    console.log('chjegou');
    return response.status(200).end();
  }
}
