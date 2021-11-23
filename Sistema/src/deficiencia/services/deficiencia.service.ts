import { Injectable } from '@nestjs/common';
import { DeficienciaEntity } from '../entities/deficiencia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeficienciaService {
  constructor(
    @InjectRepository(DeficienciaEntity)
    private readonly deficienciaRepository: Repository<DeficienciaEntity>,
  ) {}

  findAll(){
    return this.deficienciaRepository.find({
      relations: ['responsable', 'informeResumen'],
    });
  }

  findOne(id: number){
    return this.deficienciaRepository.findOne(
      { id }, { relations: ['responsable', 'informeResumen'] }
    );
  }

  create(body: any) {
    const obj = this.deficienciaRepository.create(body);
    return this.deficienciaRepository.save(obj);
  }

  async update(id: number, body: any){
    // const obj = this.deficienciaRepository.findOne(id);
    // this.deficienciaRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.deficienciaRepository.update({ id: id }, body);
  }

  async delete(id: number){
    this.deficienciaRepository.delete(id);
    return true;
  }

}
