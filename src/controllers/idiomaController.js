import ModelIdioma from '../models/ModelIdioma.js';

export const getAll = async (req, res) => {
  try {
    const idiomas = await ModelIdioma.findAll();
    res.status(200).json(idiomas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los idiomas', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const idioma = await ModelIdioma.findByPk(id);
    if (!idioma) return res.status(404).json({ message: 'Idioma no encontrado' });
    res.status(200).json(idioma);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el idioma', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoIdioma = await ModelIdioma.create(req.body);
    res.status(201).json(nuevoIdioma);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el idioma', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelIdioma.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Idioma no encontrado o sin cambios' });
    const idiomaActualizado = await ModelIdioma.findByPk(id);
    res.status(200).json(idiomaActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el idioma', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelIdioma.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Idioma no encontrado' });
    res.status(200).json({ message: 'Idioma eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el idioma', error: error.message });
  }
};