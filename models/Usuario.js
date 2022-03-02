const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(conexao) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        foto: DataTypes.STRING,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "usuarios" }
    );
  }
}

module.exports = Usuario;
