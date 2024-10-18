import { validarAdm } from "../../repository/admRepository.js";

export default async function validarAdmService(adm){

    let registros = await validarAdm(adm);

    return registros;
    
}