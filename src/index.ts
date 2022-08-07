import express  from 'express';
import { router } from './controllers/routers'

const server = express();
const porta = 5000;

server.use(router);

server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta} http://localhost:${porta}`);
})