import {
  Column,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TrabajadorEntity } from '../../trabajador/entities/trabajador.entity';
import { ActividadEntity } from '../../actividad/entities/actividad.entity';
import { Transform } from 'class-transformer';

@Entity('acuerdo')
export class AcuerdoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => TrabajadorEntity,
    (trabajadorEntity) => trabajadorEntity.listaResponsablesTrabajador
  )
  responsable: TrabajadorEntity;

  @ManyToOne(
    () => ActividadEntity,
    (actividadEntity) => actividadEntity.listaResponsablesActividad
  )
  actividad: ActividadEntity;

  @Column({ nullable: false })
  numero: number;

  @Column('text', { nullable: false })
  acuerdo: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Transform((x) => new Date(x))
  @Column('timestamp without time zone')
  fecha: Date;

  @Column({ nullable: false })
  verificacion: boolean;

}
