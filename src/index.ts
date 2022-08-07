import 'reflect-metadata';
import express  from 'express';
import { router } from './controllers/routers'
import createConnection from  './database';

createConnection();
const server = express();
const porta = 5000;

server.use(express.json());
server.use(router);

server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta} http://localhost:${porta}`);
})