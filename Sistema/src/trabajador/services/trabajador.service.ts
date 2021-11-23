import { Injectable } from '@nestjs/common';
import { TrabajadorEntity } from '../entities/trabajador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrabajadorService {
  constructor(
    @InjectRepository(TrabajadorEntity)
    private readonly trabajadorRepository: Repository<TrabajadorEntity>,
  ) {}

  findAll(){
    return this.trabajadorRepository.find();
  }

  findOne(id: number){
    return this.trabajadorRepository.findOne(id);
  }

  create(body: any) {
    const obj = this.trabajadorRepository.create(body);
    return this.trabajadorRepository.save(obj);
  }

  async update(id: number, body: any){
    // const obj = this.trabajadorRepository.findOne(id);
    // this.trabajadorRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.trabajadorRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.trabajadorRepository.delete(id);
    return true;
  }

}
