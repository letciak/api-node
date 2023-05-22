module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Turmas', [
			{
				data_inicio: "2020-02-01",
				docente_id: 10,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				data_inicio: "2020-02-01",
				docente_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				data_inicio: "2020-02-01",
				docente_id: 9,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				data_inicio: "2020-07-01",
				docente_id: 8,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
  }
}
