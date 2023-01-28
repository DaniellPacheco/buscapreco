import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/Database/Service/prisma.service';

@Injectable()
export class ProviderRepository {
  public constructor(private prisma: PrismaService) {}

  public async save(name: string, website: string): Promise<any> {
    return this.prisma.providers.create({
      data: {
        name,
        website,
      },
    });
  }

  public async findProvider(website: string): Promise<any | null> {
    return this.prisma.providers.findUnique({
      where: {
        website: website,
      },
    });
  }
}
