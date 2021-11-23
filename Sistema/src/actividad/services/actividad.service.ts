import { Injectable } from '@nestjs/common';
import { ActividadEntity } from '../entities/actividad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailNotificacionService } from '../../email-notificacion/email-notificacion.service';

@Injectable()
export class ActividadService {
  constructor(
    @InjectRepository(ActividadEntity)
    private readonly actividadRepository: Repository<ActividadEntity>,
    private emailNotificacionService: EmailNotificacionService,
  ) {}

  findAll() {
    return this.actividadRepository.find({
      relations: ['ueb', 'tipoActividad'],
    });
  }

  findOne(id: number) {
    return this.actividadRepository.findOne(
      { id },
      { relations: ['ueb', 'tipoActividad'] },
    );
  }

  create(body: any) {
    const obj = this.actividadRepository.create(body);
    this.emailNotificacionService.enviarNotificacion(obj, 'CREAR');
    return this.actividadRepository.save(obj);
  }

  async update(id: number, body: any) {
    // const obj = this.actividadRepository.findOne(id);
    // this.emailNotificacionService.enviarNotificacion(obj, 'EDITAR');
    // this.actividadRepository.merge(await obj, body);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    this.emailNotificacionService.enviarNotificacion(body, 'EDITAR');
    return this.actividadRepository.update({ id: id }, body);
  }

  async delete(id: number) {
    this.actividadRepository.delete(id);
    return true;
  }
}
