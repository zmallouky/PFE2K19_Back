"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const modalite_controle_connaissances_controller_1 = __importDefault(require("./controllers/modalite-controle-connaissances.controller"));
const unite_enseignement_controller_1 = __importDefault(require("./controllers/unite-enseignement.controller"));
const inversify_config_1 = require("./inversify.config");
const uri = 'mongodb://localhost:27017/pfe';
mongoose_1.default.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected!");
    }
});
// Constants
const PORT = 3000;
const HOST = "localhost";
// App
const app = express_1.default();
const uniteEnseignementController = inversify_config_1.ioContainer.get(unite_enseignement_controller_1.default);
const modaliteControleConnaissanceController = inversify_config_1.ioContainer.get(modalite_controle_connaissances_controller_1.default);
app.get("/", uniteEnseignementController.getUE);
app.get("/mcc", modaliteControleConnaissanceController.getMCC);
app.listen(PORT, HOST);
// tslint:disable-next-line:no-console
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=server.js.map