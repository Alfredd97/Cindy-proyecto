import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ unique: true })
  correo: string;

  @Column({ select: false })
  contrasenna: string;
}
