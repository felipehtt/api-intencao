import { inserirAdm } from "../../repository/admRepository.js";

export default async function inserirAdmService(adm){

    let id = await inserirAdm(adm);

    return id;
    
}