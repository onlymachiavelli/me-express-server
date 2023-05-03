import * as Services from './../../services/projects.services'
import * as Express from 'express'


const GetOne : Express.RequestHandler = async (req, res) =>{
    const field :any  = req.query.field
    const target : any = req.query.target 
    if (!field || !target) {
        res.status(400).send({message : "Bad request"})
        return 
    }
    const datas = await Services.getOne(field, target)

    if (datas) {
        res.status(200).send(datas)
        return
    }
    res.status(404).send({message : "No data found"})
}

export default GetOne