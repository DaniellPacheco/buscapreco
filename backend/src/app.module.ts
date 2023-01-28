import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductModule } from './Kabum/Product/product.module';
import { BrowserModule } from './Browser/browser.module';
import { ProviderModule } from './Provider/provider.module';

@Module({
  imports: [
    ProductModule,
    ProviderModule,
    BrowserModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
