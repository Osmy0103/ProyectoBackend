import Pendiente from "../models/pendientes.model.js";

export const getPendientes = async ( req, res) => {
   try {
    const pendientes = await Pendiente.find({
        user: req.user.id
    }).populate('user')
    res.json(pendientes);
    
   } catch (error) {
    return res.status(500).json({ message: "Algo fallo" })
    
   }
};

export const createPendiente = async (req, res) => {
   try {
    const { title, description, date } = req.body;

    console.log(req.user)

    const newPendiente = new Pendiente({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedPendiente = await newPendiente.save();
    res.json(savedPendiente);
   } catch (error) {
    return res.status(500).json({ message: "Algo fallo" })
   }
};

export const getPendiente = async (req, res) => {
   try {
    const pendiente = await Pendiente.findById(req.params.id).populate('user');
    if (!pendiente) return res.status(404).json({ message: "No se encontro ningun pendiente" });
    res.json(pendiente);
   } catch (error) { 
    return res.status(404).json({ message: "No se encontro ningun pendiente" })
    
   }
};

export const deletePendiente = async (req, res) => {
    try {
        const pendiente = await Pendiente.findByIdAndDelete(req.params.id);
    if (!pendiente) return res.status(404).json({ message: 'No se encontro ningun pendiente' });
    return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: 'No se encontro ningun pendiente' });
    }
};

export const updatePendiente = async (req, res) => {
   try {
    const pendiente = await Pendiente.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!pendiente) return res.status(404).json({ message: 'No se encontro ningun pendiente' });
    res.json(pendiente);
    
   } catch (error) {
    return res.status(404).json({ message: 'No se encontro ningun pendiente' });
    
   }
};