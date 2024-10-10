import con from './connection.js'

export async function inserirUsuario(usuario) {

    const comando = ` 
    
    insert into tb_usuario (nm_usuario, email, senha)
    values (?, ?, ?);

    `;

    let resposta = await con.query(comando, [usuario.nome, usuario.email, usuario.senha]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}