import ModelRol from '../models/ModelRol.js';

export const getAll = async (req, res) => {
  try {
    const roles = await ModelRol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const rol = await ModelRol.findByPk(id);
    if (!rol) return res.status(404).json({ message: 'Rol no encontrado' });
    res.status(200).json(rol);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el rol', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoRol = await ModelRol.create(req.body);
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el rol', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelRol.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Rol no encontrado o sin cambios' });
    const rolActualizado = await ModelRol.findByPk(id);
    res.status(200).json(rolActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelRol.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Rol no encontrado' });
    res.status(200).json({ message: 'Rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el rol', error: error.message });
  }
};