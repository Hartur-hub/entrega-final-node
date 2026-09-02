import ModelCategoria from '../models/ModelCategoria.js';

// Obtener todas las categorías
export const getAll = async (req, res) => {
  try {
    const categorias = await ModelCategoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las categorías',
      error: error.message
    });
  }
};

// Obtener una categoría por su ID
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await ModelCategoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({
      message: 'Error al buscar la categoría',
      error: error.message
    });
  }
};

// Crear una nueva categoría
export const create = async (req, res) => {
  try {
    const nuevaCategoria = await ModelCategoria.create(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({
      message: 'Error al crear la categoría',
      error: error.message
    });
  }
};

// Actualizar una categoría
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelCategoria.update(req.body, { where: { id } });

    if (filasAfectadas === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada o sin cambios' });
    }

    const categoriaActualizada = await ModelCategoria.findByPk(id);
    res.status(200).json(categoriaActualizada);
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar la categoría',
      error: error.message
    });
  }
};

// Eliminar una categoría
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelCategoria.destroy({ where: { id } });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar la categoría',
      error: error.message
    });
  }
};