import uploadFileFirebase from "../helpers/firebaseUpload.js";
import { Categoria, Gasto } from "../models/index.js";

const nuevoGasto = async (req, res) => {
  const { monto, categoria, ruc } = req.body;

  try {
    const imageUrl = await uploadFileFirebase(req.file.buffer);

    const gasto = new Gasto({
      monto,
      ruc,
      imagen: imageUrl,
      usuarioId: req.usuario.id,
      categoriaId: categoria,
    });

    await gasto.save();

    const categoriaAsociada = await gasto.getCategoria();

    
    res.json({ status: true, msg: "Gasto agregado con éxito.",gasto,categoria:categoriaAsociada });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: "Surgio un error." });
  }
};

const obtenerGastos = async (req, res) => {
  const gastosUser = await Gasto.findAll({
    where: {
      usuarioId: req.usuario.id,
    },
    include: [
      {
        model: Categoria,
        attributes: ["nombre"],
        as: "categoria",
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  res.json(gastosUser);
};

export { nuevoGasto, obtenerGastos };
