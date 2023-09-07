import { Router } from "express";
import { authRequiered } from "../middlewares/validartoken.js";
import {
    getPendientes,
    createPendiente,
    getPendiente,
    updatePendiente,
    deletePendiente,
} from "../controllers/pendientes.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPendienteSchema } from "../schemas/pendientes.schema.js";

const router = Router();

router.get("/pendientes", authRequiered, getPendientes);

router.get("/pendientes/:id", authRequiered, getPendiente );

router.post("/pendientes", validateSchema(createPendienteSchema), authRequiered,createPendiente); 

router.delete("/pendientes/:id", authRequiered, deletePendiente);

router.put("/pendientes/:id", authRequiered, updatePendiente);

export default router;