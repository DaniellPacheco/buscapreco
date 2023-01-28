import { Module } from '@nestjs/common';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { PrismaService } from 'src/Database/Service/prisma.service';
import { ProviderController } from './Controller/provider.controller';
import { ProviderRepository } from './Repository/provider.repository';
import { ProviderService } from './Service/provider.service';

@Module({
  imports: [],
  controllers: [ProviderController],
  providers: [ProviderService, PrismaService, ProviderRepository],
})
export class ProviderModule {}
