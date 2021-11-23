import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEntity } from './entities/actividad.entity';
import { ActividadService } from './services/actividad.service';
import { ActividadController } from './controllers/actividad.controller';
import { EmailNotificacionService } from '../email-notificacion/email-notificacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActividadEntity]),
    EmailNotificacionService,
  ],
  providers: [ActividadService, EmailNotificacionService],
  controllers: [ActividadController],
})
export class ActividadModule {}
