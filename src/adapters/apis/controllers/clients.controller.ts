import express from 'express';
import listClientUsecase from '../../../domain/usecases/clients/list.client.usecase';

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await listClientUsecase.execute();
        res.status(200).send(clients);
    }
}

export default new ClientsController();