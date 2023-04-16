import * as EXPRESS from 'express'
import * as SERVICES from './../../services/tools.services'
import date from 'date-and-time'
import Tools from '../../models/tools.entity'

const CreateTool : EXPRESS.RequestHandler= async (req, res) =>{
    const datas:any = req.body
    const now = new Date()
    const dateNow :any = date.format(now, 'YYYY/MM/DD')
    const tool = new Tools
    tool.name = datas.name
    tool.type = datas.type
    tool.svg = datas.svg

    tool.created_at = dateNow
    tool.updated_at = dateNow
    await SERVICES.AddTool(tool).then(
        (result) => {
            res.status(201).send(result)
        }
    ).catch(
        (err) => {
            res.status(500).send(err)
        }
    )
    



}

export default CreateTool