import { Container } from "inversify";
import { Model,model } from "mongoose";
import "reflect-metadata";
import ModaliteControleConnaissanceController from "./controllers/modalite-controle-connaissances.controller";
import UniteEnseignementController from "./controllers/unite-enseignement.controller";
import {IModaliteControleConnaissanceModel, ModaliteControleConnaissanceSchema} from "./repositories/model-mcc"

const ioContainer = new Container();

// controllers
ioContainer.bind<UniteEnseignementController>(UniteEnseignementController).toSelf();
ioContainer.bind<ModaliteControleConnaissanceController>(ModaliteControleConnaissanceController).toSelf();


export { ioContainer };