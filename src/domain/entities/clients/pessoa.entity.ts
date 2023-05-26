import { IAddressEntity } from "./endereco.entity";

export interface IPessoaEntity {
    indexId?: number,
    endereco?: IAddressEntity,
    cep?: string,
    limiteCredito: number,
    dataCadastro?: Date,
    dataAtualizacao?: Date,
    observacoes: string
}