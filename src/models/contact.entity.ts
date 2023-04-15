import {Entity,BaseEntity, PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity()
class Contact extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : Number 

    @Column()
    fname : string 

    @Column()
    lname : string 

    @Column() 
    phone : string 

    @Column()
    email : string

    @Column()
    subject : string 
    @Column()
    message : string

    @Column()
    sent_at : Date

    

}

export default Contact