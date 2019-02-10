import express from "express";
import mongoose from 'mongoose';
import ModaliteControleConnaissanceController from "./controllers/modalite-controle-connaissances.controller";
import UniteEnseignementController from "./controllers/unite-enseignement.controller";
import IUniteEnseignement from "./data/unite-enseignement";
import { ioContainer } from "./inversify.config";

const uri: string = 'mongodb://localhost:27017/pfe';

mongoose.connect(uri,{useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!")
    }
});

// Constants
const PORT = 3000;
const HOST = "localhost";

// App
const app = express();
const uniteEnseignementController = ioContainer.get<UniteEnseignementController>(UniteEnseignementController);
const modaliteControleConnaissanceController = ioContainer.get<ModaliteControleConnaissanceController>(ModaliteControleConnaissanceController);

app.get("/", uniteEnseignementController.getUE);

app.get("/mcc", modaliteControleConnaissanceController.getMCC);

app.listen(PORT, HOST);
// tslint:disable-next-line:no-console
console.log(`Running on http://${HOST}:${PORT}`);
