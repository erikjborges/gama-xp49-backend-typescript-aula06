"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDatabase = void 0;
const Sequelize = __importStar(require("sequelize"));
class MysqlDatabase {
    constructor() {
        this._db = 'banco_borges';
        this._username = 'root';
        this._password = 'qweiop';
        this._host = 'host.docker.internal';
        this._dialect = 'mysql';
        this._port = 3306;
        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
        });
    }
    static getInstance() {
        if (!MysqlDatabase._instance) {
            MysqlDatabase._instance = new MysqlDatabase();
        }
        return MysqlDatabase._instance;
    }
    create(model, data) {
        return model.create(data);
    }
    list(model, includes) {
        return model.findAll(includes);
    }
    createModel(name, properties) {
        return this._adapter.define(name, properties, {
            timestamps: false
        });
    }
}
exports.MysqlDatabase = MysqlDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFJdkMsTUFBYSxhQUFhO0lBV3RCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5RSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUM7WUFDeEIsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBcUQsRUFBRSxJQUFTO1FBQ25FLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQXFELEVBQUUsUUFBZ0I7UUFDeEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWSxFQUFFLFVBQWU7UUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzFDLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQS9DRCxzQ0ErQ0MifQ==