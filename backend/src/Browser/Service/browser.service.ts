import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class BrowserService {
  public async launch() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    return { browser, page };
  }
}
