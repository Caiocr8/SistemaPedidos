'use strict'

module.exports = {
    server: {
        port: process.env.PORT || 3000,
    },
    database: {
        connection: process.env.connection || 'mongodb://127.0.0.1:27017'
    },
    auth: {
        secret: 'b1b2b3b4b5'
    }
}