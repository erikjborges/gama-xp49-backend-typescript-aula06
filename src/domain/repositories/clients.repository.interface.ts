import { ClienteEntity } from "../entities/clients/cliente.entity";

export interface IClientsRepository {
    // readById(resourceId: number): Promise<ClienteEntity | undefined>,
    // create(resource: ClienteEntity): Promise<ClienteEntity>,
    // deleteById(resourceId: number): Promise<void>,
    // updateById(resource: ClienteEntity): Promise<ClienteEntity | undefined>,
    list(): Promise<ClienteEntity[]>
}