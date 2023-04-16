import Tools from "../models/tools.entity"

const GetAll = async () =>{
    return await Tools.find()
}

const GetOne = async (target: any) =>{
    return await Tools.findOne({
        where : {
            id : target 
        }
    })
}

const AddTool = async (datas : any ) =>{
    await Tools.save(datas) 
}

export {AddTool, GetAll, GetOne}