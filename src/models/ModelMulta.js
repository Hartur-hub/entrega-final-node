import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelMulta = conn.define("Multa", {
  id_multa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  fecha_generada: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_pago: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: "Multas",
  timestamps: true
});
