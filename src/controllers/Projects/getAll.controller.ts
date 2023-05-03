import * as Services from './../../services/projects.services'
import * as Express from 'express'

const GetAll :Express.RequestHandler = async (req, res) =>{
    const datas = await  Services.GetAll()
    if (datas.length === 0) {
        res.status(404).send({message : "No data found"})
        return 


    }

    res.status(200).send(datas)
}

export default GetAll