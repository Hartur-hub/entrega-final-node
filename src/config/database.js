import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN } from "./creedentials.js";

export const conn = new Sequelize(
    DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN
)
