import express from "express";
import clientsController from "../controllers/clients.controller";
import { CommonRoutesConfig } from "./common.routes.config";

export class ClientsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
                .get(clientsController.listClients)
                .post(clientsController.createClient);

        return this.app;
    }
}