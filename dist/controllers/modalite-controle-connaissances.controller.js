"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const model_mcc_1 = require("../repositories/model-mcc");
let ModaliteControleConnaissanceController = class ModaliteControleConnaissanceController {
    getMCC(req, res) {
        model_mcc_1.modaliteControleConnaissanceRepo.find().then((mcc) => {
            console.log(mcc.length);
            res.json(mcc);
        });
    }
};
ModaliteControleConnaissanceController = __decorate([
    inversify_1.injectable()
], ModaliteControleConnaissanceController);
exports.default = ModaliteControleConnaissanceController;
//# sourceMappingURL=modalite-controle-connaissances.controller.js.map