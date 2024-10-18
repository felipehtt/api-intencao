import { consultarIntencao } from "../../repository/intencaoRepository.js";

export default async function consultarIntencaoService(idAdm){

    let registros = await consultarIntencao(idAdm);

    return registros;

}
