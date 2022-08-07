import {Request, Response} from 'express';
import { CreateUserService} from '../services/CreateUserService'

class CreateUserController {
    handler (requeste: Request, response: Response){

        const createUserService = new CreateUserService();

        const nome = requeste.body.nome;
        const email = requeste.body.email;

        if (nome.length === 0 || email.length === 0){
            return response.status(400).json({mensage: `informe o nome do usuário e o email`});   
        }

        const user = createUserService.execute({nome, email});

        return response.status(200).json({mensage: `Usuário ${nome} criado` });
    } 
}

export {CreateUserController}