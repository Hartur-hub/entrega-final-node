import ModelAutor from '../models/ModelAutor.js';

// Obtener todos los autores
export const getAll = async (req, res) => {
  try {
    const autores = await ModelAutor.findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los autores',
      error: error.message
    });
  }
};

// Obtener un autor por su ID
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await ModelAutor.findByPk(id);

    if (!autor) {
      return res.status(404).json({ message: 'Autor no encontrado' });
    }

    res.status(200).json(autor);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar el autor',
      error: error.message
    });
  }
};

// Crear un nuevo autor
export const create = async (req, res) => {
  try {
    const nuevoAutor = await ModelAutor.create(req.body);
    res.status(201).json(nuevoAutor);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear el autor',
      error: error.message
    });
  }
};

// Actualizar un autor
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelAutor.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Autor no encontrado o sin cambios' });
    }

    const autorActualizado = await ModelAutor.findByPk(id);
    res.status(200).json(autorActualizado);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el autor',
      error: error.message
    });
  }
};

// Eliminar un autor
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelAutor.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Autor no encontrado' });
    }

    res.status(200).json({ message: 'Autor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el autor',
      error: error.message
    });
  }
};