import { deletarIntencao } from "../../repository/intencaoRepository.js";

export default async function deletarIntencaoService(id){

    let linhasAfetadas = await deletarIntencao(id);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma intenção deletada.')

    }

}