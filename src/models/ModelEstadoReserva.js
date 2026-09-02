import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEstadoReserva = conn.define("EstadoReserva", {
  id_estado_reserva: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_estado: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Estados_Reserva",
  timestamps: true
});
