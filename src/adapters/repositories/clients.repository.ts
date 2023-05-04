import { ClienteEntity } from "../../domain/entities/clients/cliente.entity";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";
import { ArrayDatabase } from "../../infrastructure/persistence/array.database";
import { IDatabase } from "../../infrastructure/persistence/database.interface";

class ClientsRepository implements IClientsRepository {
    private _type: string = 'client';

    constructor(private _database: IDatabase){
        
    }

    async list(): Promise<ClienteEntity[]> {
        return this._database.list(this._type);
    }
}

export default new ClientsRepository(
    ArrayDatabase.getInstance()
)