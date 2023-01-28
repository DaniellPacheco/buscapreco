import { Module } from '@nestjs/common';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { ProductController } from './Controller/product.controller';
import { ProductService } from './Service/product.service';
import { BrowserModule } from '../../Browser/browser.module';
import { BrowserService } from 'src/Browser/Service/browser.service';

@Module({
  imports: [BrowserModule],
  controllers: [ProductController],
  providers: [ProductService, BrowserService],
})
export class ProductModule {}
