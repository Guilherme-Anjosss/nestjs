import { Injectable } from '@nestjs/common';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UniversidadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUniversidadeDto: CreateUniversidadeDto) {
    return await this.prisma.universidade.create({
      data: createUniversidadeDto, // Corrigido: os dados devem estar dentro de um objeto `data`
    });
  }

  async findAll() {
    return this.prisma.universidade.findMany(); // Obtém todos os usuários
  }

  async findOne(id: number) {
    return this.prisma.universidade.findUnique({
      where: { id }, // Busca pelo ID
    });
  }

  async update(id: number, updateUniversidadeDto: UpdateUniversidadeDto) {
    return this.prisma.universidade.update({
      where: { id }, // Encontra o usuário pelo ID
      data: updateUniversidadeDto, // Atualiza com os novos dados
    });
  }

  async remove(id: number) {
    return this.prisma.universidade.delete({
      where: { id }, // Remove o usuário pelo ID
    });
  }
}
