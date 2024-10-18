import { inserirIntencao } from "../../repository/intencaoRepository.js";

export default async function inserirIntencaoService(intencao){

    let id = await inserirIntencao(intencao);

    return id;

}