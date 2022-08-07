import {Request, Response} from 'express';

class CreateUserController {
    handler (requeste: Request, response: Response){
        return response.json([
            {
                nome: 'João',
            },
            {
                nome: 'Maria'
            },
            {
                nome: 'Pedro'
            }
        ])
    } 
}

export {CreateUserController}