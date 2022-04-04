const { Model, DataTypes } = require("sequelize");

class Dono extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        genero: DataTypes.STRING,
        foto: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "donos" }
    );
  }
}

module.exports = Dono;
