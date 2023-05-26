"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(client) {
    const pessoa = {
        indexId: client.indexId,
        cep: client.cep,
        limiteCredito: client.limiteCredito,
        observacoes: client.observacoes
    };
    let pessoaFisica = undefined;
    if ('cpf' in client) {
        pessoaFisica = {
            idpessoa: undefined,
            cpf: client.cpf,
            nome: client.nome
        };
    }
    let pessoaJuridica = undefined;
    if ('cnpj' in client) {
        pessoaJuridica = {
            idpessoa: undefined,
            cnpj: client.cnpj,
            razaoSocial: client.razaoSocial
        };
    }
    let endereco = undefined;
    if ('endereco' in client) {
        endereco = Object.assign(Object.assign({}, client.endereco), { idpessoa: undefined });
    }
    return {
        pessoa: pessoa,
        pessoaFisica: pessoaFisica,
        pessoaJuridica: pessoaJuridica,
        endereco: endereco
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXNUb01vZGVscy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9lbnRpdGllc1RvTW9kZWxzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsbUJBQXlCLE1BQXFCO0lBQzFDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztRQUNmLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtRQUNuQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDbEMsQ0FBQztJQUVGLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUM3QixJQUFHLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDaEIsWUFBWSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1NBQ3BCLENBQUM7S0FDTDtJQUVELElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUMvQixJQUFHLE1BQU0sSUFBSSxNQUFNLEVBQUM7UUFDaEIsY0FBYyxHQUFHO1lBQ2IsUUFBUSxFQUFFLFNBQVM7WUFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztTQUNsQyxDQUFDO0tBQ0w7SUFFRCxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDekIsSUFBRyxVQUFVLElBQUksTUFBTSxFQUFDO1FBQ3BCLFFBQVEsbUNBQVEsTUFBTSxDQUFDLFFBQVEsR0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO0tBQ2pFO0lBRUQsT0FBTztRQUNILE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLFlBQVk7UUFDMUIsY0FBYyxFQUFFLGNBQWM7UUFDOUIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQTtBQUNMLENBQUM7QUFyQ0QsNEJBcUNDIn0=