import ModelMulta from '../models/ModelMulta.js';

export const getAll = async (req, res) => {
  try {
    const multas = await ModelMulta.findAll();
    res.status(200).json(multas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las multas', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const multa = await ModelMulta.findByPk(id);
    if (!multa) return res.status(404).json({ message: 'Multa no encontrada' });
    res.status(200).json(multa);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la multa', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevaMulta = await ModelMulta.create(req.body);
    res.status(201).json(nuevaMulta);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la multa', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelMulta.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Multa no encontrada o sin cambios' });
    const multaActualizada = await ModelMulta.findByPk(id);
    res.status(200).json(multaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la multa', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelMulta.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Multa no encontrada' });
    res.status(200).json({ message: 'Multa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la multa', error: error.message });
  }
};