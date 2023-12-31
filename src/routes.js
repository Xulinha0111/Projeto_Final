
/* IMPORTANDO O "express" */
import express from 'express';

/* ATRIBUI OS DADOS DO "express" PARA A CONSTANTE "router" */
const router = express.Router();


/* IMPORTANDO AS FUNÇÕES CRIADAS */
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';


/* CONFIGURANDO AS ROTAS */
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};