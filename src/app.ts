import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"
import contactRoute from "./routes/Contact.Routes"
import SkillRouter from "./routes/skills.routes"
import ToolsRouter from "./routes/Tools.routes"
const cors = require("cors")
const app = express()



app.use(json())
app.use(cors())

const PORT: any = process.env.PORT || 3001

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")
        app.use("/contact", contactRoute)  
        app.use("/skills", SkillRouter)
        app.use("/tools", ToolsRouter)
        //app use
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", (e) => {
    console.log("There's an error ! ", e)
  })
