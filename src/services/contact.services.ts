import Contact from "../models/contact.entity"


const getAllContact  = async  () =>{
    return await Contact.find()
}


const getContact = async (target : any) =>{

    return await Contact.findOne({
        where : {
            id : target 
        }
    })
}




const addContact  = async (datas : any) =>{
    await Contact.save(datas)
}

export {getAllContact, getContact, addContact}