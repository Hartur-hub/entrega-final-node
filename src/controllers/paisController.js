import ModelPais from '../models/ModelPais.js';

export const getAll = async (req, res) => {
  try {
    const paises = await ModelPais.findAll();
    res.status(200).json(paises);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los países', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await ModelPais.findByPk(id);
    if (!pais) return res.status(404).json({ message: 'País no encontrado' });
    res.status(200).json(pais);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el país', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoPais = await ModelPais.create(req.body);
    res.status(201).json(nuevoPais);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el país', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelPais.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'País no encontrado o sin cambios' });
    const paisActualizado = await ModelPais.findByPk(id);
    res.status(200).json(paisActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el país', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelPais.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'País no encontrado' });
    res.status(200).json({ message: 'País eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el país', error: error.message });
  }
};