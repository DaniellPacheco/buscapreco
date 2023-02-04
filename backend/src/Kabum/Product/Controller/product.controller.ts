import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from '../Service/product.service';

@Controller('product')
export class ProductController {
  public constructor(private readonly productService: ProductService) {}

  @Post('/')
  public async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const {
      provider_id,
      name,
      endpoint,
      provider_product_id,
      cash_value,
      installment_value,
    } = request.body;
    const result = await this.productService.createProduct(
      provider_id,
      name,
      endpoint,
      provider_product_id,
      cash_value,
      installment_value,
    );

    if (!result) {
      return response
        .status(400)
        .send({ error: 'Produto Já cadastrado' })
        .end();
    }
    return response.status(200).end();
  }

  @Get('/')
  public async list(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    // await this.productService.generateProductHistory();
    return response.status(200).end();
  }
}
