import * as Serv from './../../services/contact.services'

import express , {RequestHandler} from 'express'


const getAll : RequestHandler = async (req, res) =>{
    const data = await Serv.getAllContact()
    if (data) {
        res.status(200).send(data)
        return 

    }
    res.status(404).send("No Contacts at this time")

}

export default getAll