import ModelPrestamo from '../models/ModelPrestamo.js';

export const getAll = async (req, res) => {
  try {
    const prestamos = await ModelPrestamo.findAll();
    res.status(200).json(prestamos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los préstamos', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const prestamo = await ModelPrestamo.findByPk(id);
    if (!prestamo) return res.status(404).json({ message: 'Préstamo no encontrado' });
    res.status(200).json(prestamo);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el préstamo', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoPrestamo = await ModelPrestamo.create(req.body);
    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el préstamo', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelPrestamo.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Préstamo no encontrado o sin cambios' });
    const prestamoActualizado = await ModelPrestamo.findByPk(id);
    res.status(200).json(prestamoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el préstamo', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelPrestamo.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Préstamo no encontrado' });
    res.status(200).json({ message: 'Préstamo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el préstamo', error: error.message });
  }
};