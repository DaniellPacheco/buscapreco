import { Injectable } from '@nestjs/common';
import { ProviderRepository } from '../Repository/provider.repository';


@Injectable()
export class ProviderService {
  public constructor(private readonly providerRepository: ProviderRepository) {}
  public async save(name: string, website: string): Promise<any> {
    await this.providerRepository.provider();
    return await this.providerRepository.save(name, website);
  }
}
