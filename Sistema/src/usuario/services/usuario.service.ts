import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  findAll(){
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne(id);
  }

  create(body: any) {
    const obj = this.usuarioRepository.create(body);
    return this.usuarioRepository.save(obj);
  }

  async update(id: number, body: any) {
    return this.usuarioRepository.update({ id: id }, body);
  }

  async delete(id: number) {
    this.usuarioRepository.delete(id);
    return true;
  }

}
