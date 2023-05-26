import express from "express";
import clientsController from "../controllers/clients.controller";
import { CommonRoutesConfig } from "./common.routes.config";
import clientsMiddleware from "../middlewares/clients.middleware";

export class ClientsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
                .get(clientsController.listClients)
                .post(clientsController.createClient);

        this.app.route(`/clients/bulk`)
                .post(
                    clientsMiddleware.uploadFile().single('file'),
                    clientsMiddleware.parseXlsx,
                    clientsController.createClientBulk
                )

        return this.app;
    }
}