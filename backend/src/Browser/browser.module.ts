import { Module } from '@nestjs/common';
import { BrowserService } from './Service/browser.service';

@Module({
  providers: [BrowserService],
})
export class BrowserModule {}
