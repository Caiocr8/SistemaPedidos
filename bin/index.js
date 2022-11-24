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


// Chamando rotas
app.use('/', (req, res) => {
    return res.send('Você pensa que o flamengo é time?')
});


// Exportando aplicação
module.exports = app;