import ModelTipoNotificacion from '../models/ModelTipoNotificacion.js';

export const getAll = async (req, res) => {
  try {
    const tipos = await ModelTipoNotificacion.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tipos de notificación', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await ModelTipoNotificacion.findByPk(id);
    if (!tipo) return res.status(404).json({ message: 'Tipo de notificación no encontrado' });
    res.status(200).json(tipo);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el tipo de notificación', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoTipo = await ModelTipoNotificacion.create(req.body);
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el tipo de notificación', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelTipoNotificacion.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Tipo de notificación no encontrado o sin cambios' });
    const tipoActualizado = await ModelTipoNotificacion.findByPk(id);
    res.status(200).json(tipoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tipo de notificación', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelTipoNotificacion.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Tipo de notificación no encontrado' });
    res.status(200).json({ message: 'Tipo de notificación eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tipo de notificación', error: error.message });
  }
};