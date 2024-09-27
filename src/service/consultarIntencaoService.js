import { consultarIntencao } from "../repository/intencaoRepository.js";

export default async function consultarIntencaoService(){

    let registros = await consultarIntencao();

    return registros;

}
