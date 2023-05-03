import Projects from './../models/projects.entity'


//save one 

const Create = async (datas : any) =>{

    await Projects.save(datas)

} 


const GetAll = async () =>{
    return await Projects.find()
}


const getOne = async (field: any , target : any) =>{
    return await Projects.findOne({
        where:{
            [field] : target
        }
    })
}

//export all 
export {
    Create, 
    GetAll,
    getOne}