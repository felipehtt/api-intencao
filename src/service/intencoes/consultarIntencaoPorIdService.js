import { consultarIntencaoPorId } from "../../repository/intencaoRepository.js";

export default async function consultarIntencaoPorIdService(id){

    let registros = await consultarIntencaoPorId(id);

    let intencao = registros[0];

    return intencao;
    
}