import * as TypeORM from 'typeorm'


@TypeORM.Entity()
export class Skills extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id: number

    @TypeORM.Column()
    name: string

    @TypeORM.Column()
    created_at: Date

    @TypeORM.Column()
    updated_at: Date
}