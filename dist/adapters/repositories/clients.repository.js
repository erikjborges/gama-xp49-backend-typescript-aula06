"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entitiesToModels_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/entitiesToModels.mysql.database"));
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const pessoas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database"));
const pessoasfisicas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoasfisicas.models.mysql.database"));
const pessoasjuridicas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoasjuridicas.models.mysql.database"));
const enderecos_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/enderecos.models.mysql.database"));
const modelsToEntities_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/modelsToEntities.mysql.database"));
class ClientsRepository {
    constructor(_database, _modelPessoas, _modelPessoasFisicas, _modelPessoasJuridicas, _modelEnderecos) {
        this._database = _database;
        this._modelPessoas = _modelPessoas;
        this._modelPessoasFisicas = _modelPessoasFisicas;
        this._modelPessoasJuridicas = _modelPessoasJuridicas;
        this._modelEnderecos = _modelEnderecos;
        this._type = 'client';
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
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pessoa, pessoaFisica, pessoaJuridica, endereco } = (0, entitiesToModels_mysql_database_1.default)(resource);
            const pessoaModel = yield this._database.create(this._modelPessoas, pessoa);
            if (pessoaFisica) {
                pessoaFisica.idpessoa = pessoaModel.null;
                const pessoaFisicaModel = yield this._database.create(this._modelPessoasFisicas, pessoaFisica);
            }
            if (pessoaJuridica) {
                pessoaJuridica.idpessoa = pessoaModel.null;
                const pessoaJuridicaModel = yield this._database.create(this._modelPessoasJuridicas, pessoaJuridica);
            }
            if (endereco) {
                endereco.idpessoa = pessoaModel.null;
                const enderecoModel = yield this._database.create(this._modelEnderecos, endereco);
            }
            resource.indexId = pessoaModel.null;
            return resource;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoas = yield this._database.list(this._modelPessoas, {
                include: [
                    'pessoaFisica',
                    'pessoaJuridica',
                    'endereco'
                ]
            });
            const clients = pessoas.map(modelsToEntities_mysql_database_1.default);
            return clients;
        });
    }
}
exports.default = new ClientsRepository(mysql_database_1.MysqlDatabase.getInstance(), pessoas_models_mysql_database_1.default, pessoasfisicas_models_mysql_database_1.default, pessoasjuridicas_models_mysql_database_1.default, enderecos_models_mysql_database_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9jbGllbnRzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNQSw2SUFBbUg7QUFDbkgsMEZBQXNGO0FBRXRGLGdKQUFxSDtBQUNySCw4SkFBbUk7QUFDbkksa0tBQXVJO0FBQ3ZJLG9KQUF5SDtBQUN6SCw2SUFBbUg7QUFFbkgsTUFBTSxpQkFBaUI7SUFHbkIsWUFDWSxTQUF5QixFQUN6QixhQUE2RCxFQUM3RCxvQkFBb0UsRUFDcEUsc0JBQXNFLEVBQ3RFLGVBQStEO1FBSi9ELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFnRDtRQUM3RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWdEO1FBQ3BFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBZ0Q7UUFDdEUsb0JBQWUsR0FBZixlQUFlLENBQWdEO1FBUG5FLFVBQUssR0FBVyxRQUFRLENBQUM7UUFTN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ2pELFVBQVUsRUFBRSxVQUFVO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNuRCxVQUFVLEVBQUUsVUFBVTtZQUN0QixFQUFFLEVBQUUsZ0JBQWdCO1NBQ3ZCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDNUMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsRUFBRSxFQUFFLFVBQVU7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVLLE1BQU0sQ0FBQyxRQUF1Qjs7WUFFaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUEseUNBQTZCLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkcsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTVFLElBQUcsWUFBWSxFQUFDO2dCQUNaLFlBQVksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDekMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNsRztZQUVELElBQUcsY0FBYyxFQUFDO2dCQUNkLGNBQWMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDM0MsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN4RztZQUVELElBQUcsUUFBUSxFQUFDO2dCQUNSLFFBQVEsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDckMsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3JGO1lBRUQsUUFBUSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXBDLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ04sTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMxRCxPQUFPLEVBQUU7b0JBQ0wsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFVBQVU7aUJBQ2I7YUFDSixDQUFDLENBQUM7WUFFSCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUE2QixDQUFDLENBQUM7WUFFM0QsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixDQUNoQyw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQix1Q0FBMEIsRUFDMUIsOENBQWlDLEVBQ2pDLGdEQUFtQyxFQUNuQyx5Q0FBNEIsQ0FDL0IsQ0FBQSJ9