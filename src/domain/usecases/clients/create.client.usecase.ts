import { ClienteEntity } from "../../entities/clients/cliente.entity";
import { IUseCase } from "../usecase.interface";
import clientsRepository from "../../../adapters/repositories/clients.repository";

class CreateClientUseCase implements IUseCase {
    constructor(private _repository: any){

    }

    async execute(data: ClienteEntity) {
        return await this._repository.create(data);
    }
}

export default new CreateClientUseCase(
    clientsRepository
);