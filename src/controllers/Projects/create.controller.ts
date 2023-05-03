import Projects from "../../models/projects.entity"
import * as Services from './../../services/projects.services'
import * as Express from 'express'
import dateFormat from 'date-and-time'
const Create :Express.RequestHandler = async (req, res) =>{

    //get the datas !
    const body : any = req.body 

    if (!body.title || !body.description || !body.image || !body.url ) {
        res.status(400).send({message : "Bad request"})
        return 
    }

    const project = new Projects
    project.title = body.title
    project.description = body.description
    project.image = body.image
    project.link = body.url
    project.tags = body.tags ? body.tags : "none"
    const date :any = dateFormat.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    project.created_at = date

    await Services.Create(project).then((rs:any) => {

        res.status(201).send({message : "Project created !"})
    }).catch((E:any)=>{

        res.status(500).send({message : "Internal server error"})
    })
}

export default Create