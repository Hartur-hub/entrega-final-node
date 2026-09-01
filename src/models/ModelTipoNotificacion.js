import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelTipoNotificacion = conn.define("TipoNotificacion", {
  id_tipo_notificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Tipos_Notificacion",
  timestamps: true
});
