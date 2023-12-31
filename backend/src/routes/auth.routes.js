import { Router } from 'express';
import { login, logout, profile, register } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

//Importamos el validatorSchema
import { validateSchema } from '../middlewares/validator.middleware.js';
//Importamos los esquemas de validacion
import {registerSchema, loginSchema } from '../schemas/auth.schemas.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema) , login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router;
