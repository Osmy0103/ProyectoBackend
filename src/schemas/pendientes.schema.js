import { body } from "express-validator";

export const createPendienteSchema = [
  body('title')
    .notEmpty().withMessage('el titulo es obligatorio')
    .isString().withMessage('titulo'),

  body('description')
    .optional()
    .isString().withMessage('Descripción'),

  body('date')
    .optional()
    .isISO8601().toDate().withMessage('la fecha debe ser valida')
];
