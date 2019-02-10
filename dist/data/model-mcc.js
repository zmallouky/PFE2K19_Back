"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ModaliteControleConnaissanceSchema = new mongoose_1.Schema({
    codeUniteEnseignement: String,
    session: String,
    typeEpreuve: String,
    modalites: String,
    ponderation: String
});
const modaliteControleConnaissance = mongoose_1.model("pfe", ModaliteControleConnaissanceSchema, "mcc");
exports.default = modaliteControleConnaissance;
//# sourceMappingURL=model-mcc.js.map