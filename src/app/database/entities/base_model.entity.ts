import { CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

export class BaseModelEntity extends BaseEntity {
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  readonly updatedAt: Date;
}
