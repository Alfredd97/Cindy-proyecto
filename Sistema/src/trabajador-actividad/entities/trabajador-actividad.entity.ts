import {
  Column,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TrabajadorEntity } from '../../trabajador/entities/trabajador.entity';
import { ActividadEntity } from '../../actividad/entities/actividad.entity';

@Entity('trabajador_actividad')
export class TrabajadorActividadEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  preside: boolean;

  @Column({ nullable: false })
  organiza_participa: boolean;

  @ManyToOne(
    () => TrabajadorEntity,
    (trabajadorEntity) => trabajadorEntity.listaTrabajadoresActividadTrabajador
  )
  trabajador: TrabajadorEntity;

  @ManyToOne(
    () => ActividadEntity,
    (actividadEntity) => actividadEntity.listaTrabajadoresActividadActividad
  )
  actividad: ActividadEntity;

}
