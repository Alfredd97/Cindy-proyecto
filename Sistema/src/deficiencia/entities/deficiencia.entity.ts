import {
  Column,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Transform } from 'class-transformer';
import { InformeResumenEntity } from '../../informe-resumen/entities/informe-resumen.entity';
import { TrabajadorEntity } from '../../trabajador/entities/trabajador.entity';

@Entity('deficiencia')
export class DeficienciaEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => InformeResumenEntity,
    (informeResumenEntity) => informeResumenEntity.listaInformeResumenDeficiencia
  )
  informeResumen: InformeResumenEntity;

  @Column('text', { nullable: false })
  deficiencia: string;

  @Column('text', { nullable: false })
  medidas: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Transform((x) => new Date(x))
  @Column('timestamp without time zone')
  fecha_cumplimiento: Date;

  @ManyToOne(
    () => TrabajadorEntity,
    (trabajadorEntity) => trabajadorEntity.listaResponsablesDeficiencia
  )
  responsable: TrabajadorEntity;

  @Column({ nullable: false })
  verificacion: boolean;

}
