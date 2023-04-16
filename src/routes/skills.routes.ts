import  {Router}from 'express'
import CreateSkill from '../controllers/Skills/createSkill.controller'
import GetAll from '../controllers/Skills/getall.controller'
const SkillRouter = Router()

SkillRouter.post("/", CreateSkill)
SkillRouter.get("/", GetAll)



export default SkillRouter