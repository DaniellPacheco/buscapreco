import { Module } from '@nestjs/common';
import { ProductModule } from './Kabum/Product/product.module';

@Module({
  imports: [ProductModule],
})
export class AppModule {}
