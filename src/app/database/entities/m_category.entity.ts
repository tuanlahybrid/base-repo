import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseModelEntity } from "./base_model.entity";
import { ProductEntity } from "./product.entity";

@Entity('m_category')
export class CategoryEntity extends BaseModelEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id: number;

  @Column({ name: 'category_name', type: 'varchar' })
  categoryName: string;

  @OneToMany(type => ProductEntity, product => product.category)
  products: ProductEntity[];

}
