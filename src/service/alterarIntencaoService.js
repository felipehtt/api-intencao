import { alterarIntencao } from "../repository/intencaoRepository.js";

export default async function alterarIntencaoService(id, intencao) {
    
    let linhasAfetadas = await alterarIntencao(id, intencao);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma intenção alterada.')
        
    }

}