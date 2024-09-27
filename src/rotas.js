import intencaoController from "./controller/intencaoController.js";

export default function adicionarRotas(servidor){

    servidor.use(intencaoController);

}