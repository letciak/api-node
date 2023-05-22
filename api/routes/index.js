const bodyParser = require('body-parser')
const pessoas = require('./pessoasroutes')
const turmas = require('./turmasroutes')

module.exports = app => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      pessoas,
      turmas
      )
    }