import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from '../Service/product.service';

@Controller('product')
export class ProcutController {
  public constructor(private readonly productService: ProductService) {}

  @Post('/')
  public async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const { productLink } = request.body;
    console.log('chjegou');
    return response.status(200).end();
  }

  @Get('/')
  public async list(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    await this.productService.findProductsWithPromotion();
    return response.status(200).end();
  }
}
