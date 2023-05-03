import * as TypeORM from 'typeorm'

enum Type  {
    "Library",
    "Framework",
    "Language",
    "Database",
    "Other"
};

@TypeORM.Entity()
class Tools extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id: number

    @TypeORM.Column()
    name: string

    @TypeORM.Column({
        type : 'enum', 
        enum : Type
    })
    type: String

    @TypeORM.Column()
    svg:string

    @TypeORM.Column()
    created_at: Date

    @TypeORM.Column()
    updated_at: Date

}

export default Tools