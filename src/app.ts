import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import config from "./environment/index";
import routes from './route';
import Mongoose from "mongoose";

const app = express()

app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

const server = http.createServer(app);

//server initialization

function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log("Express server istening on %d, in %s mode %s", config.port, config.host, config.env);
    });
}

setImmediate(startServer);

export default app;

// connect to database

Mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const database = Mongoose.connection;
database.once("open", async () => {
    console.log("Connected to database");
});
database.on("error", () => {
    console.log("Error connecting to database");
});



// APIs

/*
app.get('/index', (req, res) => {
    console.log("req: ", req);
    return res.status(200).json({message: "success !"});
})

app.post('/create', (req, res) => {
    console.log("req: ", req);
    return res.status(200).json({message: "success !"});
})

app.delete('/remove', (req, res) => {
    console.log("req: ", req);
    return res.status(200).json({message: "success !"});
})

app.put('/update', (req, res) => {
    console.log("req: ", req);
    return res.status(200).json({message: "success !"});
})
*/