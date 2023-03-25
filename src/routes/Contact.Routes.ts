import express from 'express'
import getAll from '../controllers/Contact/getAll.controller'
const contactRoute = express.Router()

contactRoute.get("/",getAll )