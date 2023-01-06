import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  public async findProductWithPromotion(): Promise<any> {}
  public async getLinks(): Promise<any> {}
  public async registerProductPrice(): Promise<any> {}
}
