import { Module } from '@nestjs/common';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { ProcutController } from './Controller/product.controller';
import { ProductService } from './Service/product.service';
import { BrowserModule } from '../../Browser/browser.module';
import { BrowserService } from 'src/Browser/Service/browser.service';

@Module({
  imports: [BrowserModule],
  controllers: [ProcutController],
  providers: [ProductService, BrowserService],
})
export class ProductModule {}
