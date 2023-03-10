import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BrowserService } from '../../../Browser/Service/browser.service';
import { ProductRepository } from '../Repository/product.repository';

@Injectable()
export class ProductService {
  public constructor(
    private readonly browserService: BrowserService,
    private readonly productRepository: ProductRepository,
  ) {}

  public async createProduct(
    provider_id: number,
    name: string,
    endpoint: string,
    provider_product_id: string,
    cash_value: number,
    installment_value: number,
  ): Promise<any> {
    const product = await this.productRepository.findProduct(
      provider_id,
      provider_product_id,
    );

    if (product) {
      console.log(`Produto ${name} já cadastrado!`);
      return;
    }

    await this.productRepository.save(
      provider_id,
      name,
      endpoint,
      provider_product_id,
      cash_value,
      installment_value,
    );
  }

  @Cron('0 10 * * * *')
  public async generateProductHistory(): Promise<any> {
    const products = await this.getProducts();
    const { browser, page } = await this.browserService.launch();

    for (const product of products) {
      console.log(`Acessando ${product} ...:`);
      await page.goto(product, { waitUntil: 'load', timeout: 0 });
      const content = await page.evaluate(() => {
        const $ = (window as any).$;
        return {
          cash_value: $('.finalPrice')[0]
            ?.innerText?.replace('R$', '')
            .trim()
            ?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          installment_value: $('.regularPrice')[0]
            ?.innerText?.replace('R$', '')
            .trim()
            ?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          promotion: $('#cardAlertaOferta').length ? true : false,
          supplyAmount: $('#cardAlertaOferta')
            ?.find('div:nth-child(2)')
            ?.find('div:nth-child(3)')
            ?.find('b')[0]
            ?.innerText.replace(/[^\d]/g, ''),
        };
      });
      console.log(content);
    }

    return;
  }

  public async getProducts(): Promise<Array<any>> {
    return [
      'https://www.kabum.com.br/produto/85197/ssd-240-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-350mb-s-sa400s37-240g',
      'https://www.kabum.com.br/produto/371539/smart-tv-lg-43-polegadas-led-4k-uhd-3-hdmi-1-usb-wi-fi-bluetooth-hdr-thinqai-compativel-com-smart-magic-google-alexa-43uq7500',
      'https://www.kabum.com.br/produto/155321/robo-aspirador-de-po-kabum-smart-700-branco-mapeamento-ir-360-controle-via-aplicativo-google-assistant-e-alexa-kbsf006',
      'https://www.kabum.com.br/produto/308367/notebook-acer-aspire-5-intel-core-i7-10510u-8gb-ram-512gb-ssd-nvme-tela-15-6-ips-full-hd-windows-11-home-prata-a515-54-74f9',
      'https://www.kabum.com.br/produto/128562/placa-de-video-rtx-3090-trinity-zotac-nvidia-geforce-24gb-gddr6x-zt-a30900d-10p',
    ];
  }
  public async registerProductPrice(): Promise<any> {
    console.log('teste');
  }
}
