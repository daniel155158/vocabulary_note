'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Vocabulary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Vocabulary.belongsTo(models.User, { foreignKey: 'userId' })
      Vocabulary.belongsTo(models.Language, { foreignKey: 'languageId' })
    }
  }
  Vocabulary.init({
    name: DataTypes.STRING,
    meaning: DataTypes.STRING,
    note: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vocabulary',
    tableName: 'Vocabularies',
    underscored: true
  })
  return Vocabulary
}
