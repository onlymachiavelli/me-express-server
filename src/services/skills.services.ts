import Skills  from "../models/skills.entity"

const GetAll = async () =>{
    return await Skills.find()
}

const GetOne = async (target: any) =>{
    return await Skills.findOne({
        where : {
            id : target 
        }
})}

const AddSkill = async (datas : any ) =>{
    await Skills.save(datas) 
}

export {AddSkill, GetAll, GetOne}