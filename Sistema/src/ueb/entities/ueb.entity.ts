import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActividadEntity } from '../../actividad/entities/actividad.entity';

@Entity('ueb')
export class UebEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  @Column({})
  direccion: string;

  @Column({})
  numero: number;

  @OneToMany(
    () => ActividadEntity,
    (actividadEntity) => actividadEntity.ueb,
  )
  listaActividadesUeb: ActividadEntity[];
}
