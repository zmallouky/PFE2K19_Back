import { Document, Model, model,Schema} from "mongoose";
import IModaliteControleConnaissance from "../data/modalite-controle-connaissances";

export interface IModaliteControleConnaissanceModel extends IModaliteControleConnaissance,Document{
}

export const ModaliteControleConnaissanceSchema: Schema = new Schema({
    codeUniteEnseignement : String,
    session : String,
    typeEpreuve : String,
    modalites : String,
    ponderation : String
  });


export const modaliteControleConnaissanceRepo: Model<IModaliteControleConnaissanceModel> = model<IModaliteControleConnaissanceModel>("pfe", ModaliteControleConnaissanceSchema,"mcc");