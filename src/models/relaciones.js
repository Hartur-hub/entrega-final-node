import { ModelRol } from "../models/ModelRol.js";
import { ModelTipoDocumento } from "../models/ModelTipoDocumento.js";
import { ModelEstadoUsuario } from "../models/ModelEstadoUsuario.js";
import { ModelUsuario } from "../models/ModelUsuario.js";
import { ModelPais } from "../models/ModelPais.js";
import { ModelEditorial } from "../models/ModelEditorial.js";
import { ModelIdioma } from "../models/ModelIdioma.js";
import { ModelLibro } from "../models/ModelLibro.js";
import { ModelAutor } from "../models/ModelAutor.js";
import { ModelLibroAutor } from "../models/ModelLibroAutor.js";
import { ModelCategoria } from "../models/ModelCategoria.js";
import { ModelLibroCategoria } from "../models/ModelLibroCategoria.js";
import { ModelEstadoEjemplar } from "../models/ModelEstadoEjemplar.js";
import { ModelEjemplar } from "../models/ModelEjemplar.js";
import { ModelEstadoPrestamo } from "../models/ModelEstadoPrestamo.js";
import { ModelPrestamo } from "../models/ModelPrestamo.js";
import { ModelEstadoReserva } from "../models/ModelEstadoReserva.js";
import { ModelReserva } from "../models/ModelReserva.js";
import { ModelEstadoMulta } from "../models/ModelEstadoMulta.js";
import { ModelMulta } from "../models/ModelMulta.js";
import { ModelTipoNotificacion } from "../models/ModelTipoNotificacion.js";
import { ModelNotificacion } from "../models/ModelNotificacion.js";

// ===================== USUARIOS =====================
ModelRol.hasMany(ModelUsuario, { foreignKey: "id_rol" });
ModelUsuario.belongsTo(ModelRol, { foreignKey: "id_rol" });

ModelTipoDocumento.hasMany(ModelUsuario, { foreignKey: "id_tipo_documento" });
ModelUsuario.belongsTo(ModelTipoDocumento, { foreignKey: "id_tipo_documento" });

ModelEstadoUsuario.hasMany(ModelUsuario, { foreignKey: "id_estado_cliente" });
ModelUsuario.belongsTo(ModelEstadoUsuario, { foreignKey: "id_estado_cliente" });

// ===================== EDITORIALES / LIBROS =====================
ModelPais.hasMany(ModelEditorial, { foreignKey: "id_pais" });
ModelEditorial.belongsTo(ModelPais, { foreignKey: "id_pais" });

ModelEditorial.hasMany(ModelLibro, { foreignKey: "id_editorial" });
ModelLibro.belongsTo(ModelEditorial, { foreignKey: "id_editorial" });

ModelIdioma.hasMany(ModelLibro, { foreignKey: "id_idioma" });
ModelLibro.belongsTo(ModelIdioma, { foreignKey: "id_idioma" });

// ===================== LIBRO <-> AUTOR (N:M) =====================
ModelLibro.belongsToMany(ModelAutor, {
  through: ModelLibroAutor,
  foreignKey: "id_libro",
  otherKey: "id_autor"
});
ModelAutor.belongsToMany(ModelLibro, {
  through: ModelLibroAutor,
  foreignKey: "id_autor",
  otherKey: "id_libro"
});

// ===================== LIBRO <-> CATEGORIA (N:M) =====================
ModelLibro.belongsToMany(ModelCategoria, {
  through: ModelLibroCategoria,
  foreignKey: "id_libro",
  otherKey: "id_categoria"
});
ModelCategoria.belongsToMany(ModelLibro, {
  through: ModelLibroCategoria,
  foreignKey: "id_categoria",
  otherKey: "id_libro"
});

// ===================== EJEMPLARES =====================
ModelLibro.hasMany(ModelEjemplar, { foreignKey: "id_libro" });
ModelEjemplar.belongsTo(ModelLibro, { foreignKey: "id_libro" });

ModelEstadoEjemplar.hasMany(ModelEjemplar, { foreignKey: "id_estado_ejemplar" });
ModelEjemplar.belongsTo(ModelEstadoEjemplar, { foreignKey: "id_estado_ejemplar" });

// ===================== PRESTAMOS =====================
ModelEjemplar.hasMany(ModelPrestamo, { foreignKey: "id_ejemplar" });
ModelPrestamo.belongsTo(ModelEjemplar, { foreignKey: "id_ejemplar" });

ModelUsuario.hasMany(ModelPrestamo, { foreignKey: "id_cliente", as: "prestamosComoCliente" });
ModelPrestamo.belongsTo(ModelUsuario, { foreignKey: "id_cliente", as: "cliente" });

ModelUsuario.hasMany(ModelPrestamo, { foreignKey: "id_registrado_por", as: "prestamosRegistrados" });
ModelPrestamo.belongsTo(ModelUsuario, { foreignKey: "id_registrado_por", as: "registradoPor" });

ModelEstadoPrestamo.hasMany(ModelPrestamo, { foreignKey: "id_estado_prestamo" });
ModelPrestamo.belongsTo(ModelEstadoPrestamo, { foreignKey: "id_estado_prestamo" });

// ===================== RESERVAS =====================
ModelLibro.hasMany(ModelReserva, { foreignKey: "id_libro" });
ModelReserva.belongsTo(ModelLibro, { foreignKey: "id_libro" });

ModelUsuario.hasMany(ModelReserva, { foreignKey: "id_cliente" });
ModelReserva.belongsTo(ModelUsuario, { foreignKey: "id_cliente" });

ModelEstadoReserva.hasMany(ModelReserva, { foreignKey: "id_estado_reserva" });
ModelReserva.belongsTo(ModelEstadoReserva, { foreignKey: "id_estado_reserva" });

// ===================== MULTAS =====================
ModelPrestamo.hasMany(ModelMulta, { foreignKey: "id_prestamo" });
ModelMulta.belongsTo(ModelPrestamo, { foreignKey: "id_prestamo" });

ModelEstadoMulta.hasMany(ModelMulta, { foreignKey: "id_estado_multa" });
ModelMulta.belongsTo(ModelEstadoMulta, { foreignKey: "id_estado_multa" });

// ===================== NOTIFICACIONES =====================
ModelUsuario.hasMany(ModelNotificacion, { foreignKey: "id_cliente" });
ModelNotificacion.belongsTo(ModelUsuario, { foreignKey: "id_cliente" });

ModelTipoNotificacion.hasMany(ModelNotificacion, { foreignKey: "id_tipo_notificacion" });
ModelNotificacion.belongsTo(ModelTipoNotificacion, { foreignKey: "id_tipo_notificacion" });