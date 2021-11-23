import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadorEntity } from './entities/trabajador.entity';
import { TrabajadorService } from './services/trabajador.service';
import { TrabajadorController } from './controllers/trabajador.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrabajadorEntity])
  ],
  providers: [TrabajadorService],
  controllers: [TrabajadorController]
})
export class TrabajadorModule {}
