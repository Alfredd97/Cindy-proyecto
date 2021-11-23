import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcuerdoEntity } from './entities/acuerdo.entity';
import { AcuerdoService } from './services/acuerdo.service';
import { AcuerdoController } from './controllers/acuerdo.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([AcuerdoEntity])
  ],
  providers: [AcuerdoService],
  controllers: [AcuerdoController]
})
export class AcuerdoModule {}
