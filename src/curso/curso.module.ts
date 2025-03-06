import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Prismamodule } from 'src/prisma/prisma.module';

@Module({
  imports: [Prismamodule],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [],
})
export class CursoModule {}
