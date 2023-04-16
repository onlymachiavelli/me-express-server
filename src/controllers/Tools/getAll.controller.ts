
import * as EXPRESS from 'express'
import * as SERVICES from './../../services/tools.services'

const GetAll : EXPRESS.RequestHandler = async (req, res) =>{
    const datas  : any = await SERVICES.GetAll()
    console.log(datas)
    if (datas.length > 0) {
        res.status(200).send(datas)
        return 
    }
    res.status(404).send("Not Found")
}

export default GetAll