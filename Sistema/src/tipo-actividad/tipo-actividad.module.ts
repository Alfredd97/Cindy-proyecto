import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoActividadEntity } from './entities/tipo-actividad.entity';
import { TipoActividadService } from './services/tipo-actividad.service';
import { TipoActividadController } from './controllers/tipo-actividad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoActividadEntity]),
  ],
  providers: [TipoActividadService],
  controllers: [TipoActividadController]
})
export class TipoActividadModule {}
