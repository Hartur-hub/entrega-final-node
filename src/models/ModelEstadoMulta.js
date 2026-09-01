import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEstadoMulta = conn.define("EstadoMulta", {
  id_estado_multa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_estado: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Estados_Multa",
  timestamps: true
});
