import { Injectable } from '@nestjs/common';
import { AcuerdoEntity } from '../entities/acuerdo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AcuerdoService {
  constructor(
    @InjectRepository(AcuerdoEntity)
    private readonly acuerdoRepository: Repository<AcuerdoEntity>,
  ) {}

  findAll(){
    return this.acuerdoRepository.find({
      relations: ['responsable', 'actividad'],
    });
  }

  findOne(id: number){
    return this.acuerdoRepository.findOne(
      { id }, { relations: ['responsable', 'actividad'] }
    );
  }

  create(body: any) {
    const obj = this.acuerdoRepository.create(body);
    return this.acuerdoRepository.save(obj);
  }

  async update(id: number, body: any) {
    // const obj = this.acuerdoRepository.findOne(id);
    // this.acuerdoRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.acuerdoRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.acuerdoRepository.delete(id);
    return true;
  }

}
