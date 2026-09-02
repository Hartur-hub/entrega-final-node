import ModelUsuario from '../models/ModelUsuario.js';

export const getAll = async (req, res) => {
  try {
    const usuarios = await ModelUsuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await ModelUsuario.findByPk(id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoUsuario = await ModelUsuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el usuario', error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasAfectadas] = await ModelUsuario.update(req.body, { where: { id } });
    if (filasAfectadas === 0) return res.status(404).json({ message: 'Usuario no encontrado o sin cambios' });
    const usuarioActualizado = await ModelUsuario.findByPk(id);
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await ModelUsuario.destroy({ where: { id } });
    if (filasEliminadas === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};