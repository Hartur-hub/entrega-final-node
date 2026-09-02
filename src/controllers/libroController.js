import ModelLibro from '../models/ModelLibro.js';

export const getAll = async (req, res) => {
  try {
    const libros = await ModelLibro.findAll();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await ModelLibro.findByPk(id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el libro', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoLibro = await ModelLibro.create(req.body);
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el libro', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelLibro.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Libro no encontrado o sin cambios' });
    const libroActualizado = await ModelLibro.findByPk(id);
    res.status(200).json(libroActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el libro', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelLibro.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Libro no encontrado' });
    res.status(200).json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro', error: error.message });
  }
};