import { Router } from "express";
const endpoints = Router();
import inserirAdmService from '../service/adm/inserirAdmService.js';
import validarAdmService from "../service/adm/validarAdmService.js";
import consultarAdmService from "../service/adm/consutarAdmService.js";

import { gerarToken } from "../utils/jwt.js";
import { autenticar } from "../utils/jwt.js";


endpoints.post('/cadastrar', async (req, resp) => {

    try {
    
        let adm = req.body;

        let id = await inserirAdmService(adm);

        resp.send({

            idAdm: id

        })

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })
        
    }
})

endpoints.post('/login', async (req, resp) => {

    try {

        let adm = req.body;

        let login = await validarAdmService(adm);

        if (login == null) {

            resp.send({ error: 'Usuário ou senha incorreto(s).' });

        }
        else{

            let token = gerarToken(login);

            resp.send({

               "token": token

            })

        }

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })
    }

})


endpoints.get('/adm', autenticar, async (req, resp) => {

    try {
    
        let registros = await consultarAdmService();

        resp.send(registros);
        
    }
    catch(err){

        resp.status(400).send({
            erro: err.message
        })
    }

})


export default endpoints;