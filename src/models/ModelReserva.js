import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelReserva = conn.define("Reserva", {
  id_reserva: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_reserva: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  tableName: "Reservas",
  timestamps: true
});
