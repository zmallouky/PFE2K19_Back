import { Request, Response} from 'express';
import { injectable } from "inversify";
import "reflect-metadata";
import IUniteEnseignement from '../data/unite-enseignement';

@injectable()
export default class UniteEnseignementController {

    public getUE(req:Request, res:Response) {
        const uniteEnseignement:IUniteEnseignement = {
            codeUniteEnseignement : "code",
            description : "description"
          };
          res.json(uniteEnseignement);
    }
}