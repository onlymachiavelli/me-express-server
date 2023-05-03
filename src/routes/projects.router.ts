import {Router} from 'express'
import Create from './../controllers/Projects/create.controller'
import GetAll from './../controllers/Projects/getAll.controller'
import GetOne from './../controllers/Projects/getone.controller'

const ProjRouter = Router()

ProjRouter.post('/', Create)
ProjRouter.get('/', GetAll)
ProjRouter.get('/getone', GetOne)

export default ProjRouter