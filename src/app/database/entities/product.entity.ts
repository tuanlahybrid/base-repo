
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModelEntity } from "./base_model.entity";
import { CategoryEntity } from "./m_category.entity";

@Entity('product')
export class ProductEntity extends BaseModelEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id: number;

  @Column({ name: 'product_name', type: 'varchar' })
  productName: string;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'price', type: 'int', nullable: true })
  price: number;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'category_id', type: 'int' })
  categoryId: number;

  @ManyToOne(type => CategoryEntity, category => category.products)
  @JoinColumn({ name: 'category_id' })
  readonly category: CategoryEntity;

}
