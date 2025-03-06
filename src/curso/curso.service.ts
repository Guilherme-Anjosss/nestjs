import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createcursoDto: CreateCursoDto) {
    return await this.prisma.curso.create({
      data: createcursoDto, // Corrigido: os dados devem estar dentro de um objeto `data`
    });
  }

  async findAll() {
    return this.prisma.curso.findMany(); // Obtém todos os usuários
  }

  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id }, // Busca pelo ID
    });
  }

  async update(id: number, updatecursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id }, // Encontra o usuário pelo ID
      data: updatecursoDto, // Atualiza com os novos dados
    });
  }

  async remove(id: number) {
    return this.prisma.curso.delete({
      where: { id }, // Remove o usuário pelo ID
    });
  }
}
