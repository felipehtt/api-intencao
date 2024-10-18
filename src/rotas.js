import intencaoController from "./controller/intencaoController.js";
import admController from "./controller/admController.js";

export default function adicionarRotas(servidor){

    servidor.use(intencaoController);
    servidor.use(admController);

}