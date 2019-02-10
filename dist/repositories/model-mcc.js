"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ModaliteControleConnaissanceSchema = new mongoose_1.Schema({
    codeUniteEnseignement: String,
    session: String,
    typeEpreuve: String,
    modalites: String,
    ponderation: String
});
exports.modaliteControleConnaissanceRepo = mongoose_1.model("pfe", exports.ModaliteControleConnaissanceSchema, "mcc");
//# sourceMappingURL=model-mcc.js.map