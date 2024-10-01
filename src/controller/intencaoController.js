import { Router } from "express";
const endpoints = Router();

import inserirIntencaoService from "../service/inserirIntencaoService.js";
import consultarIntencaoService from "../service/consultarIntencaoService.js";
import alterarIntencaoService from "../service/alterarIntencaoService.js";
import deletarIntencaoService from "../service/deletarIntencaoService.js";
import consultarIntencaoPorIdService from "../service/consultarIntencaoPorIdService.js";

endpoints.post('/intencao', async (req, resp) => {

    try {
        
        let intencao = req.body;

        let id = await inserirIntencaoService(intencao);

        resp.send({

            idIntencao: id

        });

    } 
    catch(err){
    
        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.get('/intencao', async (req, resp) => {

    try {
        
        let registros = await consultarIntencaoService();

        resp.send(registros);

    } 
    catch(err){
    
        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.put('/intencao/:id', async (req, resp) => {

    try {
    
        let intencao = req.body;

        let id = req.params.id;

        await alterarIntencaoService(intencao, id)

        resp.status(204).send();

    } 
    catch(err){

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.delete('/intencao/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        await deletarIntencaoService(id);

        resp.status(204).send();

    } 
    catch(err){
        
        resp.status(400).send({

            erro: err.message

        })

    }

})


//Consultando Por Id
endpoints.get('/intencao/:id', async (req, resp) => {

    try {
        
        let id = req.params.id

        let registros = await consultarIntencaoPorIdService(id)

        resp.send(registros);

    } 
    catch(err){
    
        resp.status(400).send({

            erro: err.message

        })

    }

})


export default endpoints;