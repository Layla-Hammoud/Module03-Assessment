import express from "express"
import "dotenv/config.js"
import db from './models/index.js'
import ArticleRouter from "./routes/article.js"
import cors from "cors";
import morgan from 'morgan'

const app = express()

app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use(morgan('dev'));

app.use("/api/article", ArticleRouter); 

const port = process.env.PORT || 4000

app.listen(port,async()=>{
    console.log(`The server is running pn port ${port}`)
    console.log("connecting to DB")
    await db.sequelize.sync()
    console.log("connected")
})