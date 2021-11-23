import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadModule } from './actividad/actividad.module';
import { UebModule } from './ueb/ueb.module';
import { AcuerdoModule } from './acuerdo/acuerdo.module';
import { DeficienciaModule } from './deficiencia/deficiencia.module';
import { InformeResumenModule } from './informe-resumen/informe-resumen.module';
import { TipoActividadModule } from './tipo-actividad/tipo-actividad.module';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { TrabajadorActividadModule } from './trabajador-actividad/trabajador-actividad.module';

// console.log('DATABASE', process.env.PG_NESTJS_DATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'new123',
      database: 'bd_tesis_tony',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    ActividadModule,
    UebModule,
    AcuerdoModule,
    DeficienciaModule,
    InformeResumenModule,
    TipoActividadModule,
    TrabajadorModule,
    TrabajadorActividadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
