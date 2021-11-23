import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  IsEmail
} from 'class-validator';
import { TrabajadorActividadEntity } from '../../trabajador-actividad/entities/trabajador-actividad.entity';
import { AcuerdoEntity } from '../../acuerdo/entities/acuerdo.entity';
import { InformeResumenEntity } from '../../informe-resumen/entities/informe-resumen.entity';
import { DeficienciaEntity } from '../../deficiencia/entities/deficiencia.entity';

@Entity('trabajador')
export class TrabajadorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ unique: true })
  @IsEmail()
  correo: string;

  @Column({ length: 100 })
  cargo: string;

  @OneToMany(
    () => TrabajadorActividadEntity,
    (trabajadorActividadEntity) => trabajadorActividadEntity.trabajador,
  )
  listaTrabajadoresActividadTrabajador: TrabajadorActividadEntity[];

  @OneToMany(
    () => AcuerdoEntity,
    (acuerdoEntity) => acuerdoEntity.responsable,
  )
  listaResponsablesTrabajador: AcuerdoEntity[];

  @OneToMany(
    () => InformeResumenEntity,
    (informeResumenEntity) => informeResumenEntity.realizador,
  )
  listaRealizadoresTrabajador: InformeResumenEntity[];

  @OneToMany(
    () => DeficienciaEntity,
    (deficienciaEntity) => deficienciaEntity.responsable,
  )
  listaResponsablesDeficiencia: DeficienciaEntity[];

}
