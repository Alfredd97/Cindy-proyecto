import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UebEntity } from './entities/ueb.entity';
import { UebService } from './services/ueb.service';
import { UebController } from './controllers/ueb.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UebEntity]),
  ],
  providers: [UebService],
  controllers: [UebController]
})
export class UebModule {}
