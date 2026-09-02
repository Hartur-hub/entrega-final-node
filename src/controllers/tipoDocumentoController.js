import ModelTipoDocumento from '../models/ModelTipoDocumento.js';

export const getAll = async (req, res) => {
  try {
    const tipos = await ModelTipoDocumento.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tipos de documento', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await ModelTipoDocumento.findByPk(id);
    if (!tipo) return res.status(404).json({ message: 'Tipo de documento no encontrado' });
    res.status(200).json(tipo);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el tipo de documento', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoTipo = await ModelTipoDocumento.create(req.body);
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el tipo de documento', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelTipoDocumento.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Tipo de documento no encontrado o sin cambios' });
    const tipoActualizado = await ModelTipoDocumento.findByPk(id);
    res.status(200).json(tipoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tipo de documento', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelTipoDocumento.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Tipo de documento no encontrado' });
    res.status(200).json({ message: 'Tipo de documento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tipo de documento', error: error.message });
  }
};