import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelNotificacion = conn.define("Notificacion", {
  id_notificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mensaje: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  referencia_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tipo_referencia: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  fecha_envio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  leida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: "Notificaciones",
  timestamps: true
});
