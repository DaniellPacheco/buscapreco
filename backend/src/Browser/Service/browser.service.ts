import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class BrowserService {
  public async launch() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
      executablePath: '/usr/bin/chromium-browser',
    });
    const page = await browser.newPage();

    return { browser, page };
  }
}
