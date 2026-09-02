import ModelReserva from '../models/ModelReserva.js';

export const getAll = async (req, res) => {
  try {
    const reservas = await ModelReserva.findAll();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await ModelReserva.findByPk(id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la reserva', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevaReserva = await ModelReserva.create(req.body);
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la reserva', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelReserva.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Reserva no encontrada o sin cambios' });
    const reservaActualizada = await ModelReserva.findByPk(id);
    res.status(200).json(reservaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la reserva', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelReserva.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Reserva no encontrada' });
    res.status(200).json({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la reserva', error: error.message });
  }
};