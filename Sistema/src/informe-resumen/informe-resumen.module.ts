import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeResumenEntity } from './entities/informe-resumen.entity';
import { InformeResumenService } from './services/informe-resumen.service';
import { InformeResumenController } from './controllers/informe-resumen.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([InformeResumenEntity])
  ],
  providers: [InformeResumenService],
  controllers: [InformeResumenController]
})
export class InformeResumenModule {}
