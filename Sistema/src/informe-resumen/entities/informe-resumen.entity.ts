import {
  Column,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TrabajadorEntity } from '../../trabajador/entities/trabajador.entity';
import { ActividadEntity } from '../../actividad/entities/actividad.entity';
import { Transform } from 'class-transformer';
import { TrabajadorActividadEntity } from '../../trabajador-actividad/entities/trabajador-actividad.entity';
import { DeficienciaEntity } from '../../deficiencia/entities/deficiencia.entity';

@Entity('informe_resumen')
export class InformeResumenEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => TrabajadorEntity,
    (trabajadorEntity) => trabajadorEntity.listaRealizadoresTrabajador
  )
  realizador: TrabajadorEntity;

  @ManyToOne(
    () => ActividadEntity,
    (actividadEntity) => actividadEntity.listaRealizadoresActividad
  )
  actividad: ActividadEntity;

  @Column({ nullable: false })
  nombre: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Transform((x) => new Date(x))
  @Column('timestamp without time zone')
  fecha: Date;

  @Column('text', { nullable: false })
  valoracion: string;

  @Column({ nullable: false })
  tiene_deficiencia: boolean;

  @Column('text', { nullable: false })
  recomendaciones: string;

  @Column({ nullable: false })
  calificacion: number;

  @Column({ nullable: false })
  nombre_controlado: string;

  @Column({ nullable: false })
  cargo_controlado: string;

  @OneToMany(
    () => DeficienciaEntity,
    (deficienciaEntity) => deficienciaEntity.informeResumen,
  )
  listaInformeResumenDeficiencia: DeficienciaEntity[];

}
