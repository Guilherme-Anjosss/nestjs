import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { Prismamodule } from 'src/prisma/prisma.module';

@Module({
  imports: [Prismamodule],
  controllers: [EnderecoController],
  providers: [EnderecoService],
  exports: [],
})
export class EnderecoModule {}
