import { Request, Response} from 'express';
import { inject,injectable } from "inversify";
import "reflect-metadata";
import { modaliteControleConnaissanceRepo } from "../repositories/model-mcc";

@injectable()
export default class ModaliteControleConnaissanceController {

    public getMCC(req:Request, res:Response) {  
          modaliteControleConnaissanceRepo.find().then((mcc) => {
              console.log(mcc.length);
            res.json(mcc);
          });
    }
}