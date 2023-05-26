import { ClienteEntity } from "../../../domain/entities/clients/cliente.entity";

export default function (client: ClienteEntity) {
    const pessoa = {
        indexId: client.indexId,
        cep: client.cep,
        limiteCredito: client.limiteCredito,
        observacoes: client.observacoes
    };

    let pessoaFisica = undefined;
    if('cpf' in client) {
        pessoaFisica = {
            idpessoa: undefined,
            cpf: client.cpf,
            nome: client.nome
        };
    }

    let pessoaJuridica = undefined;
    if('cnpj' in client){
        pessoaJuridica = {
            idpessoa: undefined,
            cnpj: client.cnpj,
            razaoSocial: client.razaoSocial
        };
    }

    let endereco = undefined;
    if('endereco' in client){
        endereco = { ...client.endereco, ...{ idpessoa: undefined } };
    }

    return {
        pessoa: pessoa,
        pessoaFisica: pessoaFisica,
        pessoaJuridica: pessoaJuridica,
        endereco: endereco
    }
}