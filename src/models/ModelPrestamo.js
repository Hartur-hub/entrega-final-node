import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelPrestamo = conn.define("Prestamo", {
  id_prestamo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_prestamo: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_devolucion_esperada: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_devolucion_real: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  observaciones: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: "Prestamos",
  timestamps: true
});
