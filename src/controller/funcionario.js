const Funcionario = require('../resources/funcionario');


// Fazer registro do funcionario
exports.getCriar = async (req, res, next) => {
    try {
        return res.send('Página - Funcionario');
    } catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try {
        let resultado = await Funcionario.validarRegistro(req.body);
        if (!resultado) {
            let funcionario = await Funcionario.criar(req.body);
            return res.json(funcionario);
        } else {
            return res.json(
                {
                    error: 'Funcionario ja existe'
                }
            );
        }
    } catch (err) {
        next(err);
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Funcionario.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}