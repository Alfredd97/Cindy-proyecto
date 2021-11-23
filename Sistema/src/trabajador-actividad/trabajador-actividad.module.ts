import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadorActividadEntity } from './entities/trabajador-actividad.entity';
import { TrabajadorActividadService } from './services/trabajador-actividad.service';
import { TrabajadorActividadController } from './controllers/trabajador-actividad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrabajadorActividadEntity])
  ],
  providers: [TrabajadorActividadService],
  controllers: [TrabajadorActividadController]
})
export class TrabajadorActividadModule {}
