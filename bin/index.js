const express = require('express');
const bp = require('body-parser');

const app = express();


// Configurando o parser
app.use(
    bp.json({
        limit: '10mb'
    })
);
app.use(
    bp.urlencoded({
        extended: false
    })
);


// Configurando o front-end
app.set(
    'view engine', 'ejs'
);
app.set(
    'views', 'views'
);


// Definindo arquivos estaticos
app.use(
    express.static('public')
);

const cliente_route = require('../src/routes/cliente');
const funcionario_route = require('../src/routes/funcionario');
app.use('/cliente', cliente_route);
app.use('/funcionario', funcionario_route);


// Chamando rotas
app.use('/', (req, res) => {
    return res.send('BEM VIND@!')
});


// Exportando aplicação
module.exports = app;