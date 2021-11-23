import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActividadEntity } from '../../actividad/entities/actividad.entity';

@Entity('tipo_actividad')
export class TipoActividadEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  @OneToMany(
    () => ActividadEntity,
    (actividadEntity) => actividadEntity.tipoActividad,
  )
  listaActividadesTipoActividad: ActividadEntity[];

}
