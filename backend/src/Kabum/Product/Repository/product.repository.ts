import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/Database/Service/prisma.service';

@Injectable()
export class ProductRepository {
  public constructor(private prisma: PrismaService) {}

  /**
   *
   * @param providerId
   * @param name
   * @param endpoint link do produto
   * @param provider_product_id id produto no site
   * @param cash_value
   * @param installment_value
   * @returns
   */
  public async save(
    provider_id: number,
    name: string,
    endpoint: string,
    provider_product_id: string,
    cash_value: number,
    installment_value: number,
  ): Promise<any> {
    return this.prisma.products.create({
      data: {
        provider_id,
        name,
        endpoint,
        provider_product_id,
        cash_value,
        installment_value,
      },
    });
  }

  public async findProduct(
    provider_id: number,
    provider_product_id: string,
  ): Promise<any | null> {
    return this.prisma.products.findUnique({
      where: {
        provider_id_provider_product_id: { provider_id, provider_product_id },
      },
    });
  }
}
