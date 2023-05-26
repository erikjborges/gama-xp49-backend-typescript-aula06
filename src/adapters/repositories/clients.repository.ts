import { resourceUsage } from "process";
import { ClienteEntity } from "../../domain/entities/clients/cliente.entity";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";
import { ArrayDatabase } from "../../infrastructure/persistence/array.database";
import { IDatabase } from "../../infrastructure/persistence/database.interface";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import entitiesToModelsMysqlDatabase from "../../infrastructure/persistence/mysql/entitiesToModels.mysql.database";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import * as Sequelize from 'sequelize';
import pessoasModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database";
import pessoasfisicasModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/pessoasfisicas.models.mysql.database";
import pessoasjuridicasModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/pessoasjuridicas.models.mysql.database";
import enderecosModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/enderecos.models.mysql.database";
import modelsToEntitiesMysqlDatabase from "../../infrastructure/persistence/mysql/modelsToEntities.mysql.database";

class ClientsRepository implements IClientsRepository {
    private _type: string = 'client';

    constructor(
        private _database: IDatabaseModel,
        private _modelPessoas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelPessoasFisicas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelPessoasJuridicas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelEnderecos: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){
        this._modelPessoas.hasOne(this._modelPessoasFisicas, {
            foreignKey: 'idpessoa',
            as: 'pessoaFisica'
        });

        this._modelPessoas.hasOne(this._modelPessoasJuridicas, {
            foreignKey: 'idpessoa',
            as: 'pessoaJuridica'
        });

        this._modelPessoas.hasOne(this._modelEnderecos, {
            foreignKey: 'idpessoa',
            as: 'endereco'
        });
    }

    async create(resource: ClienteEntity): Promise<ClienteEntity> {
        
        const { pessoa, pessoaFisica, pessoaJuridica, endereco } = entitiesToModelsMysqlDatabase(resource);

        const pessoaModel = await this._database.create(this._modelPessoas, pessoa);

        if(pessoaFisica){
            pessoaFisica.idpessoa = pessoaModel.null;
            const pessoaFisicaModel = await this._database.create(this._modelPessoasFisicas, pessoaFisica);
        }

        if(pessoaJuridica){
            pessoaJuridica.idpessoa = pessoaModel.null;
            const pessoaJuridicaModel = await this._database.create(this._modelPessoasJuridicas, pessoaJuridica);
        }

        if(endereco){
            endereco.idpessoa = pessoaModel.null;
            const enderecoModel = await this._database.create(this._modelEnderecos, endereco);
        }

        resource.indexId = pessoaModel.null;

        return resource;
    }

    async list(): Promise<ClienteEntity[]> {
        const pessoas = await this._database.list(this._modelPessoas, {
            include: [
                'pessoaFisica',
                'pessoaJuridica',
                'endereco'
            ]
        });

        const clients = pessoas.map(modelsToEntitiesMysqlDatabase);

        return clients;
    }
}

export default new ClientsRepository(
    MysqlDatabase.getInstance(),
    pessoasModelsMysqlDatabase,
    pessoasfisicasModelsMysqlDatabase,
    pessoasjuridicasModelsMysqlDatabase,
    enderecosModelsMysqlDatabase
)