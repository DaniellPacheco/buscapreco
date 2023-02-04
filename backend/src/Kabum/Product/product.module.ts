import { Module } from '@nestjs/common';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { ProductController } from './Controller/product.controller';
import { ProductService } from './Service/product.service';
import { BrowserModule } from '../../Browser/browser.module';
import { BrowserService } from 'src/Browser/Service/browser.service';
import { ProductRepository } from './Repository/product.repository';
import { PrismaService } from 'src/Database/Service/prisma.service';

@Module({
  imports: [BrowserModule],
  controllers: [ProductController],
  providers: [ProductService, BrowserService, ProductRepository, PrismaService],
})
export class ProductModule {}
