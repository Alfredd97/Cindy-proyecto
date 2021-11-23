import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UebEntity } from '../entities/ueb.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericResponse } from '../../utiles/generic-response/generic-response';

@Injectable()
export class UebService {
  constructor(
    @InjectRepository(UebEntity)
    private readonly uebRepository: Repository<UebEntity>,
  ) {
  }

  findAll() {
    return this.uebRepository.find();
  }

  findOne(id: number) {
    return this.uebRepository.findOne(id);
  }

  create(body: any) {
    const obj = this.uebRepository.create(body);
    return this.uebRepository.save(obj);
  }

  async update(id: number, body: any) {
    // const obj = this.uebRepository.findOne(id);
    // this.uebRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    return this.uebRepository.update({ id: id }, body);
  }

  async delete(id: number) {
    this.uebRepository.delete(id);
    return true;
  }

}
