import { Injectable } from '@nestjs/common';
import { BrowserService } from '../../../Browser/Service/browser.service';

@Injectable()
export class ProductService {
  public constructor(private readonly browserService: BrowserService) {}

  public async findProductsWithPromotion(): Promise<any> {
    const products = this.getProducts();

    const { browser, page } = await this.browserService.launch();

    for (const product in products) {
      await page.goto(product, { waitUntil: 'load', timeout: 0 });
      const content = await page.evaluate(() => {
        const $ = (window as any).$;

        return {
          finalPrice: $('.finalPrice')[0]
            .innerText.replace(/(\R\$)|(\.)/g, '')
            .replace(',', '.')
            .trim(),
          regularPrice: $('.regularPrice')[0]
            .innerText.replace(/(\R\$)|(\.)/g, '')
            .replace(',', '.')
            .trim(),
          oldPrice: $('.oldPrice')[0]
            .innerText.replace(/(\R\$)|(\.)/g, '')
            .replace(',', '.')
            .trim(),
        };
      });
      console.log(content);
    }

    return;
  }

  public async getProducts(): Promise<any> {
    return [
      'https://www.kabum.com.br/produto/85197/ssd-240-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-350mb-s-sa400s37-240g',
    ];
  }
  public async registerProductPrice(): Promise<any> {}
}
