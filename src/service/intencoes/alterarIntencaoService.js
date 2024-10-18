import { alterarIntencao } from "../../repository/intencaoRepository.js";

export default async function alterarIntencaoService(intencao, id) {
    
    let linhasAfetadas = await alterarIntencao(intencao, id);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma intenção alterada.')
        
    }

}