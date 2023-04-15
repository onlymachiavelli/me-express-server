import Skills from "../../models/skills.entity"
import * as Services from './../../services/skills.services'
import * as EXPRESS from 'express'
import day  from 'date-and-time'
const CreateSkill : EXPRESS.RequestHandler = async (req, res) =>{
    const datas : any = req.body
    const skill = new Skills
    skill.name = datas.name
    const sa : any =  day.format(new Date(), 'YYYY/MM/DD HH:mm:ss')
    skill.created_at = sa 
    skill.updated_at = sa 
    Services.AddSkill(skill).then((re) =>{
        res.status(200).send("The skill has been added successfully")
    })
    .catch((err) =>{
        res.status(500).send("Internal Server Error")
    }
    )
}


export default CreateSkill