import express from 'express'
import getAll from '../controllers/Contact/getAll.controller'
const contactRoute = express.Router()
import CreateContact from '../controllers/Contact/create.controller'

contactRoute.get("/",getAll )
contactRoute.post("/",CreateContact )

export default contactRoute