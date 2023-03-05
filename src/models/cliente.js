const smc = require('simple-mongoose-creator');
smc.smc('clientes', {
    nome: {
        type: String,
        required: true,
        trim: trim
    },
    telefone: {
        type: String,
        required: true
    }
});

module.exports = smc;
