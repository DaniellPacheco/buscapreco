import { Module } from '@nestjs/common';
import { ProductModule } from './Kabum/Product/product.module';
import { BrowserModule } from './Browser/browser.module';

@Module({
  imports: [ProductModule, BrowserModule],
})
export class AppModule {}
