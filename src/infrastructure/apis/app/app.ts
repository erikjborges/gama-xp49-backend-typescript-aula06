import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinton from 'express-winston';
import cors from 'cors';
import { debug } from 'debug';

import { CommonRoutesConfig } from '../../../adapters/apis/routes/common.routes.config';
import { ClientsRoutes } from '../../../adapters/apis/routes/clients.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinton.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    )
};

if(!process.env.DEBUG){
    loggerOptions.meta = false;
}

app.use(expressWinton.logger(loggerOptions));

routes.push(new ClientsRoutes(app));

const runningMessage = `Servidor rodando na porta: ${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
})

export default app;