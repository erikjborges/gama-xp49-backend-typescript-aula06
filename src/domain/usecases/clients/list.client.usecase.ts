import clientsRepository from "../../../adapters/repositories/clients.repository";
import { ClienteEntity } from "../../entities/clients/cliente.entity";
import { IUseCase } from "../usecase.interface";

class ListClientUseCase implements IUseCase {
    constructor(private _repository: any){

    }

    async execute(): Promise<ClienteEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListClientUseCase(
    clientsRepository
);