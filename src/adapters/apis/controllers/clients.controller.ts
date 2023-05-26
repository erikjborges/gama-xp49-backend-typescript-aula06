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

    async createClientBulk(req: express.Request, res: express.Response){
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createClientUsecase.execute(req.body.fileData[countUsers]);
        }

        res.status(201).send({
            createdUsers: countUsers
        });
    }
}

export default new ClientsController();