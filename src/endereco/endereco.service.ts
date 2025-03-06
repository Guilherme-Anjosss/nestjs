import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    return await this.prisma.endereco.create({
      data: createEnderecoDto, // Corrigido: os dados devem estar dentro de um objeto `data`
    });
  }

  async findAll() {
    return this.prisma.endereco.findMany(); // Obtém todos os usuários
  }

  async findOne(id: number) {
    return this.prisma.endereco.findUnique({
      where: { id }, // Busca pelo ID
    });
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.prisma.endereco.update({
      where: { id }, // Encontra o usuário pelo ID
      data: updateEnderecoDto, // Atualiza com os novos dados
    });
  }

  async remove(id: number) {
    return this.prisma.endereco.delete({
      where: { id }, // Remove o usuário pelo ID
    });
  }
}
