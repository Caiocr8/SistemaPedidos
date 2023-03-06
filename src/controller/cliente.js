const Cliente = require('../resources/cliente');

exports.getCriar = async (req, res, next) => {
    try {
        return res.send('oi, aqui renderizo um form de cadastro de cliente');
    } catch (err) {
        next(err);
    }
}

exports.postCriar = async (req, res, next) => {
    try {
        const cliente = await Cliente.criar(req.body);
        return res.json(cliente);
    } catch (err) {
        next(err);
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Cliente.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}