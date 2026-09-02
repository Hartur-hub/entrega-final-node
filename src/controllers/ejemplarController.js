import ModelEjemplar from '../models/ModelEjemplar.js';

// Obtener todos los ejemplares
export const getAll = async (req, res) => {
  try {
    const ejemplares = await ModelEjemplar.findAll();
    res.status(200).json(ejemplares);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los ejemplares',
      error: error.message
    });
  }
};

// Obtener un ejemplar por su ID
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const ejemplar = await ModelEjemplar.findByPk(id);

    if (!ejemplar) {
      return res.status(404).json({ message: 'Ejemplar no encontrado' });
    }

    res.status(200).json(ejemplar);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar el ejemplar',
      error: error.message
    });
  }
};

// Crear un nuevo ejemplar
export const create = async (req, res) => {
  try {
    const nuevoEjemplar = await ModelEjemplar.create(req.body);
    res.status(201).json(nuevoEjemplar);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el ejemplar',
      error: error.message
    });
  }
};

// Actualizar un ejemplar
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelEjemplar.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Ejemplar no encontrado o sin cambios' });
    }

    const ejemplarActualizado = await ModelEjemplar.findByPk(id);
    res.status(200).json(ejemplarActualizado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el ejemplar',
      error: error.message
    });
  }
};

// Eliminar un ejemplar
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelEjemplar.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Ejemplar no encontrado' });
    }

    res.status(200).json({ message: 'Ejemplar eliminado correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el ejemplar',
      error: error.message
    });
  }
};