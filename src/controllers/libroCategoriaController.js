import ModelLibroCategoria from '../models/ModelLibroCategoria.js';

export const getAll = async (req, res) => {
  try {
    const relaciones = await ModelLibroCategoria.findAll();
    res.status(200).json(relaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las relaciones libro-categoría', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const relacion = await ModelLibroCategoria.findByPk(id);
    if (!relacion) return res.status(404).json({ message: 'Relación no encontrada' });
    res.status(200).json(relacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la relación', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevaRelacion = await ModelLibroCategoria.create(req.body);
    res.status(201).json(nuevaRelacion);
  } catch (error) {
    res.status(400).json({ message: 'Error al asociar el libro con la categoría', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelLibroCategoria.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Relación no encontrada o sin cambios' });
    const relacionActualizada = await ModelLibroCategoria.findByPk(id);
    res.status(200).json(relacionActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la relación', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelLibroCategoria.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Relación no encontrada' });
    res.status(200).json({ message: 'Relación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la relación', error: error.message });
  }
};