import ModelEstadoPrestamo from '../models/ModelEstadoPrestamo.js';

export const getAll = async (req, res) => {
  try {
    const estados = await ModelEstadoPrestamo.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los estados de préstamo',
      error: error.message
    });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await ModelEstadoPrestamo.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado de préstamo no encontrado' });
    }

    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar el estado de préstamo',
      error: error.message
    });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoEstado = await ModelEstadoPrestamo.create(req.body);
    res.status(201).json(nuevoEstado);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el estado de préstamo',
      error: error.message
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelEstadoPrestamo.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Estado de préstamo no encontrado o sin cambios' });
    }

    const estadoActualizado = await ModelEstadoPrestamo.findByPk(id);
    res.status(200).json(estadoActualizado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el estado de préstamo',
      error: error.message
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelEstadoPrestamo.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Estado de préstamo no encontrado' });
    }

    res.status(200).json({ message: 'Estado de préstamo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el estado de préstamo',
      error: error.message
    });
  }
};