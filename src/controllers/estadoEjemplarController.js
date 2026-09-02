import ModelEstadoEjemplar from '../models/ModelEstadoEjemplar.js';

// Obtener todos los estados de ejemplar
export const getAll = async (req, res) => {
  try {
    const estados = await ModelEstadoEjemplar.findAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los estados de ejemplar',
      error: error.message
    });
  }
};

// Obtener un estado de ejemplar por su ID
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await ModelEstadoEjemplar.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado de ejemplar no encontrado' });
    }

    res.status(200).json(estado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar el estado de ejemplar',
      error: error.message
    });
  }
};

// Crear un nuevo estado de ejemplar
export const create = async (req, res) => {
  try {
    const nuevoEstado = await ModelEstadoEjemplar.create(req.body);
    res.status(201).json(nuevoEstado);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el estado de ejemplar',
      error: error.message
    });
  }
};

// Actualizar un estado de ejemplar
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelEstadoEjemplar.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Estado de ejemplar no encontrado o sin cambios' });
    }

    const estadoActualizado = await ModelEstadoEjemplar.findByPk(id);
    res.status(200).json(estadoActualizado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el estado de ejemplar',
      error: error.message
    });
  }
};

// Eliminar un estado de ejemplar
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelEstadoEjemplar.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Estado de ejemplar no encontrado' });
    }

    res.status(200).json({ message: 'Estado de ejemplar eliminado correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el estado de ejemplar',
      error: error.message
    });
  }
};