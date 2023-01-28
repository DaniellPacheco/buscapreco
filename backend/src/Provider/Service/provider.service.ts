import { Injectable } from '@nestjs/common';
import { ProviderRepository } from '../Repository/provider.repository';

@Injectable()
export class ProviderService {
  public constructor(private readonly providerRepository: ProviderRepository) {}
  public async save(name: string, website: string): Promise<any> {
    const provider = await this.providerRepository.findProvider(website);
    if (provider) {
      console.log(`Seu dado é ${name}`);
      return;
    }
    return await this.providerRepository.save(name, website);
  }
}
