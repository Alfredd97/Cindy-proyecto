import { Injectable } from '@nestjs/common';
import { TrabajadorActividadEntity } from '../entities/trabajador-actividad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrabajadorActividadService {
  constructor(
    @InjectRepository(TrabajadorActividadEntity)
    private readonly trabajadorActividadRepository: Repository<TrabajadorActividadEntity>,
  ) {}

  findAll(){
    return this.trabajadorActividadRepository.find({
      relations: ['trabajador', 'actividad'],
    });
  }

  findOne(id: number){
    return this.trabajadorActividadRepository.findOne(
      { id }, { relations: ['trabajador', 'actividad'] }
    );
  }

  create(body: any) {
    const obj = this.trabajadorActividadRepository.create(body);
    return this.trabajadorActividadRepository.save(obj);
  }

  async update(id: number, body: any){
    // const obj = this.trabajadorActividadRepository.findOne(id);
    // this.trabajadorActividadRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.trabajadorActividadRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.trabajadorActividadRepository.delete(id);
    return true;
  }

}
