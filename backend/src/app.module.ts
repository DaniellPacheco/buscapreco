import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductModule } from './Kabum/Product/product.module';
import { BrowserModule } from './Browser/browser.module';

@Module({
  imports: [ProductModule, BrowserModule, ScheduleModule.forRoot()],
})
export class AppModule {}
