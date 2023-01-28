import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProviderService } from '../Service/provider.service';

@Controller('provider')
export class ProviderController {
  public constructor(private readonly providerService: ProviderService) {}

  @Post('/')
  public async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    const { name, website } = request.body;
    const result = await this.providerService.save(name, website);
    return response.status(200).send(result).end();
  }

  @Get('/')
  public async list(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    console.log('sou foda');
    return response.status(200).end();
  }
}
