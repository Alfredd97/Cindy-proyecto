import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TipoActividadEntity } from '../entities/tipo-actividad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoActividadService {
  constructor(
    @InjectRepository(TipoActividadEntity)
    private readonly tipoActividadRepository: Repository<TipoActividadEntity>,
  ) {}

  findAll(){
    return this.tipoActividadRepository.find();
  }

  findOne(id: number){
    return this.tipoActividadRepository.findOne(id);
  }

  create(body: any) {
    const obj = this.tipoActividadRepository.create(body);
    return this.tipoActividadRepository.save(obj);
  }

  async update(id: number, body: any){
    // const obj = this.tipoActividadRepository.findOne(id);
    // this.tipoActividadRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.tipoActividadRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.tipoActividadRepository.delete(id);
    return true;
  }

}
