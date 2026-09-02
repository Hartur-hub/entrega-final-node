import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEstadoPrestamo = conn.define("EstadoPrestamo", {
  id_estado_prestamo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_estado: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Estados_Prestamo",
  timestamps: true
});
