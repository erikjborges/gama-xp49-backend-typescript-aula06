import supertest from 'supertest';
import api from './app';
import { ClienteEntity } from '../../../domain/entities/clients/cliente.entity';

describe("Testes integrados clientes", () => {
    test("Teste integrado criando cliente", async() => {
        const client: ClienteEntity = {
            "cpf": 123456789027,
            "nome": "Erik Borges",
            "limiteCredito": 1000.00,
            "observacoes": "Bom pagador :)",
            // "endereco": "Rua do Pe de Arroz, 123"
        };

        const res = await supertest(api).post('/clients')
                                        .send(client)
                                        .set('Accept', 'application/json');

        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(client);
    })
})