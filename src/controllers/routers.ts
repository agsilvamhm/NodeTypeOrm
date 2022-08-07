import { Router, Request, Response } from 'express';
import { CreateUserController } from './CreateUserController';

const router = Router();
const createUserController = new CreateUserController;

router.get('/', (requeste: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo a nossa API DIO'})
});

router.get('/usuarios', createUserController.handler) 

export {router};