import * as EXPRESS from 'express'
import CreateTool from '../controllers/Tools/create.controller'
import GetAll from '../controllers/Tools/getAll.controller'
const ToolsRouter = EXPRESS.Router()

ToolsRouter.post("/",CreateTool )
ToolsRouter.get("/",GetAll )

export default ToolsRouter

