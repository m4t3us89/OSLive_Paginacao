const express = require('express');
const router = express.Router();
const simulacao = require('./index')


router.get('/',  simulacao.list)
router.post('/' , simulacao.add )
router.get('/processos/:idSimulacao',  simulacao.processos.list)
router.put('/processos/:idSimulacao',  simulacao.processos.update)


module.exports = router;
