const database = require('../models/')

class PessoaController {
    static async retornaPessoas(req, res) {
    try {    
        const todasPessoas = await database.Pessoas.findAll()
        return res.status(200).json(todasPessoas)  
    } catch (error) {
        return res.status(500).json(error.mesage)    
    }
} 

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
        const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
        return res.status(200).json(pessoaAtualizada)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

    //delete  
    static async apagaPessoa(req, res) {
        const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) }})
        return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

}

module.exports = PessoaController