import { Injectable } from '@nestjs/common';
import { InformeResumenEntity } from '../entities/informe-resumen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InformeResumenService {
  constructor(
    @InjectRepository(InformeResumenEntity)
    private readonly informeResumenRepository: Repository<InformeResumenEntity>,
  ) {}

  findAll(){
    return this.informeResumenRepository.find({
      relations: ['realizador', 'actividad'],
    });
  }

  findOne(id: number){
    return this.informeResumenRepository.findOne(
      { id }, { relations: ['realizador', 'actividad'] }
    );
  }

  create(body: any) {
    const obj = this.informeResumenRepository.create(body);
    return this.informeResumenRepository.save(obj);
  }

  async update(id: number, body: any){
    // const obj = this.informeResumenRepository.findOne(id);
    // this.informeResumenRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.informeResumenRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.informeResumenRepository.delete(id);
    return true;
  }

}
