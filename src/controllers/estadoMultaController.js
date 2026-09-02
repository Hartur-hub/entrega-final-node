import ModelEstadoMulta from '../models/ModelEstadoMulta.js';

export const getAll = async (req, res) => {
  try {
    const estados = await ModelEstadoMulta.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los estados de multa',
      error: error.message
    });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await ModelEstadoMulta.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado de multa no encontrado' });
    }

    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar el estado de multa',
      error: error.message
    });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoEstado = await ModelEstadoMulta.create(req.body);
    res.status(201).json(nuevoEstado);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el estado de multa',
      error: error.message
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelEstadoMulta.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Estado de multa no encontrado o sin cambios' });
    }

    const estadoActualizado = await ModelEstadoMulta.findByPk(id);
    res.status(200).json(estadoActualizado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el estado de multa',
      error: error.message
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelEstadoMulta.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Estado de multa no encontrado' });
    }

    res.status(200).json({ message: 'Estado de multa eliminado correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el estado de multa',
      error: error.message
    });
  }
};