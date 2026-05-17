import Productos from "../models/productos.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Productos.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error });
  }
};
