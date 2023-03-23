import Contact from "../models/contact.entity"


const getAllContact  = async  () =>{
    return await Contact.find()
}

export {getAllContact}