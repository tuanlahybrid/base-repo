import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModelEntity } from "./base_model.entity";

@Entity('user')
export class UserEntity extends BaseModelEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id: number;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar', select: false })
  password: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'phone_number', type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean;

}
