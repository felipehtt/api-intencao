export function DataAtual(agr) {
    
    let msg = new Date(agr)
    
    const opcoes = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const dataFormatada = msg.toLocaleDateString('pt-BR', opcoes);

    return dataFormatada;

}