import express, {RequestHandler} from 'express'
import * as Serv from '../../services/contact.services'
import { checkContact } from '../../utils/check'
import Contact from '../../models/contact.entity'
import date from "date-and-time"

const CreateContact:RequestHandler = async (req, res) => {

    const datas : any = req.body
    if (!checkContact(datas)) {
        res.status(400).send("Bad Request")
        return 
    }
    const contact = new Contact
    contact.email  = datas.email
    contact.fname = datas.fname 
    contact.lname = datas.lname
    contact.phone = datas.phone 
    
    contact.subject = datas.subject
    contact.message = datas.message 
    const sa : any =  date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')
    contact.sent_at  = sa 
    Serv.addContact(contact).then((re) =>{
        res.status(200).send("The message has been sent successfully")
    })
    .catch((err) =>{
        res.status(500).send("Internal Server Error")
    }
    )
    

}


export default CreateContact