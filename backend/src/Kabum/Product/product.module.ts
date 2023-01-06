import { Module } from '@nestjs/common';
import { ProcutController } from './Controller/product.controller';
import { ProductService } from './Service/product.service';

@Module({
  imports: [],
  controllers: [ProcutController],
  providers: [ProductService],
})
export class ProductModule {}
