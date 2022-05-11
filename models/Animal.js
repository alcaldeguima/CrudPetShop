const { Model, DataTypes } = require("sequelize");

class Animal extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        especie: DataTypes.STRING,
        peso: DataTypes.STRING,
        foto: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "animais" }
    );
  }
}

module.exports = Animal;
