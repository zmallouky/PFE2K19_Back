"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const modalite_controle_connaissances_controller_1 = __importDefault(require("./controllers/modalite-controle-connaissances.controller"));
const unite_enseignement_controller_1 = __importDefault(require("./controllers/unite-enseignement.controller"));
const ioContainer = new inversify_1.Container();
exports.ioContainer = ioContainer;
// controllers
ioContainer.bind(unite_enseignement_controller_1.default).toSelf();
ioContainer.bind(modalite_controle_connaissances_controller_1.default).toSelf();
//# sourceMappingURL=inversify.config.js.map