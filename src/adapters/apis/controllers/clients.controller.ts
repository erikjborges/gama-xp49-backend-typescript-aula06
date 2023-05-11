import express from 'express';
import listClientUsecase from '../../../domain/usecases/clients/list.client.usecase';
import createClientUsecase from '../../../domain/usecases/clients/create.client.usecase';

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await listClientUsecase.execute();
        res.status(200).send(clients);
    }

    async createClient(req: express.Request, res: express.Response){
        const client = await createClientUsecase.execute(req.body);
        res.status(201).send(client);
    }
}

export default new ClientsController();