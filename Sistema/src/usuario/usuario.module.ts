import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity])
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
