import ModelNotificacion from '../models/ModelNotificacion.js';

export const getAll = async (req, res) => {
  try {
    const notificaciones = await ModelNotificacion.findAll();
    res.status(200).json(notificaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las notificaciones', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const notificacion = await ModelNotificacion.findByPk(id);
    if (!notificacion) return res.status(404).json({ message: 'Notificación no encontrada' });
    res.status(200).json(notificacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la notificación', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevaNotificacion = await ModelNotificacion.create(req.body);
    res.status(201).json(nuevaNotificacion);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la notificación', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelNotificacion.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Notificación no encontrada o sin cambios' });
    const notificacionActualizada = await ModelNotificacion.findByPk(id);
    res.status(200).json(notificacionActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la notificación', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelNotificacion.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Notificación no encontrada' });
    res.status(200).json({ message: 'Notificación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la notificación', error: error.message });
  }
};