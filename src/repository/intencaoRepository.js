import con from './connection.js';


export async function inserirIntencao(intencao) {

    const comando = ` 
    
        insert into tb_intencoes (id_adm, nome, telefone, cep, data_festa, tipo_festa, 
        tema_festa, data_intencao)
        values (?, ?, ?, ?, ?, ?, ?, ?)
    
    `;

    let resposta = await con.query(comando, [intencao.adm, intencao.nome, intencao.telefone, 
    intencao.cep, intencao.dataFesta, intencao.tipoFesta, intencao.temaFesta,
    intencao.dataIntencao]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarIntencao(idAdm){

    const comando = `
    
        select 
            id_intencao    idIntencao,
            id_adm         adm, 
            nome           nome,
            telefone       telefone,
            cep            cep,
            data_festa     dataFesta,
            tipo_festa     tipoFesta, 
            tema_festa     temaFesta,
            data_intencao  dataIntencao
        from tb_intencoes
        where id_adm = ?

    `;

    let resposta = await con.query(comando, [idAdm]);

    let registros = resposta[0];

    return registros;

}


export async function alterarIntencao(intencao, id){

    const comando = `
    
        update tb_intencoes
            set nome = ?,
                telefone = ?,
                cep = ?,
                data_festa = ?,
                tipo_festa = ?,
                tema_festa = ?,
                data_intencao = ?
        where id_intencao = ?

    `;

    let resposta = await con.query(comando, [intencao.nome, intencao.telefone, 
    intencao.cep, intencao.dataFesta, intencao.tipoFesta, intencao.temaFesta,
    intencao.dataIntencao, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}

export async function deletarIntencao(id) {
    const comando = `

        delete from tb_intencoes
        where id_intencao = ?;

    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
    
}

//Consultando Por ID
export async function consultarIntencaoPorId(id){

    const comando = `
    
        select 
            id_intencao    idIntencao, 
            nome           nome,
            telefone       telefone,
            cep            cep,
            data_festa     dataFesta,
            tipo_festa     tipoFesta, 
            tema_festa     temaFesta,
            data_intencao  dataIntencao
        from tb_intencoes
        where id_intencao = ?;

    `;

    let resposta = await con.query(comando, [id]);

    let registros = resposta[0];

    return registros;

}
