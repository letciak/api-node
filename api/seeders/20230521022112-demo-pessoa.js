module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				ativo: true,
				email: 'ana@hotmail.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@hotmail.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@hotmail.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
