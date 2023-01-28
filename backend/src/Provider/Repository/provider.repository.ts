import { Injectable } from '@nestjs/common';
import { Providers, Prisma } from '@prisma/client';
import { PrismaService } from 'src/Database/Service/prisma.service';

@Injectable()
export class ProviderRepository {
  public constructor(private prisma: PrismaService) {}

  public async save(): Promise<any> {}
  public async findProvider(website: string): Promise<Providers | null> {
    return this.prisma.providers.findUnique({
      where: {
        website: website,
      },
    });
  }
}
