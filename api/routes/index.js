const bodyParser = require('body-parser')
const pessoas = require('./pessoasroutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get('/', (req, res) => res.send('olá'))
}