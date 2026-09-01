import { DataTypes, Sequelize } from "sequelize";
import conn from "../config/database.js";

export const EstadoUsuario = conn.define("EstadoUsuario", {
    id_estado_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_estado_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: Estados_Usuario,
    timestamps: true
})