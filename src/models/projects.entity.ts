import * as TypeORM from 'typeorm'


@TypeORM.Entity()


class Projects extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id : Number 

    @TypeORM.Column()
    title : String 

    @TypeORM.Column()
    description : String

    @TypeORM.Column()
    image : String // URL OF THE IMAGE 

    @TypeORM.Column()
    link : String // URL OF THE PROJECT

    
    @TypeORM.Column()
    tags:string // the tags of the stack ! 

    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date



}


export default Projects