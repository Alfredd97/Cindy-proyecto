import {
  Column,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Transform } from 'class-transformer';
import { UebEntity } from '../../ueb/entities/ueb.entity';
import { TipoActividadEntity } from '../../tipo-actividad/entities/tipo-actividad.entity';
import { TrabajadorActividadEntity } from '../../trabajador-actividad/entities/trabajador-actividad.entity';
import { AcuerdoEntity } from '../../acuerdo/entities/acuerdo.entity';
import { InformeResumenEntity } from '../../informe-resumen/entities/informe-resumen.entity';

@Entity('actividad')
export class ActividadEntity {

  @PrimaryGeneratedColumn()
  id: number;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Transform((x) => new Date(x))
  @Column('timestamp without time zone')
  fecha_hora: Date;

  @ManyToOne(
    () => UebEntity,
    (uebEntity) => uebEntity.listaActividadesUeb
  )
  ueb: UebEntity;

  @ManyToOne(
    () => TipoActividadEntity,
    (tipoActividadEntity) => tipoActividadEntity.listaActividadesTipoActividad
  )
  tipoActividad: TipoActividadEntity;

  @Column({ nullable: false })
  notificar: string;

  @OneToMany(
    () => TrabajadorActividadEntity,
    (trabajadorActividadEntity) => trabajadorActividadEntity.actividad,
  )
  listaTrabajadoresActividadActividad: TrabajadorActividadEntity[];

  @OneToMany(
    () => AcuerdoEntity,
    (acuerdoEntity) => acuerdoEntity.actividad,
  )
  listaResponsablesActividad: AcuerdoEntity[];

  @OneToMany(
    () => InformeResumenEntity,
    (informeResumenEntity) => informeResumenEntity.actividad,
  )
  listaRealizadoresActividad: InformeResumenEntity[];

}
