import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeficienciaEntity } from './entities/deficiencia.entity';
import { DeficienciaService } from './services/deficiencia.service';
import { DeficienciaController } from './controllers/deficiencia.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeficienciaEntity])
  ],
  providers: [DeficienciaService],
  controllers: [DeficienciaController]
})
export class DeficienciaModule {}
