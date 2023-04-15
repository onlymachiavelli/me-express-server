import * as Services from './../../services/skills.services'
import * as EXPRESS from 'express'

const GetAll : EXPRESS.RequestHandler = async (req, res) =>{
    const datas  : any = Services.GetAll()
    if (datas.length) {
        res.status(200).send(datas)
        return 
    }
    res.status(404).send("Not Found")
}

export default GetAll