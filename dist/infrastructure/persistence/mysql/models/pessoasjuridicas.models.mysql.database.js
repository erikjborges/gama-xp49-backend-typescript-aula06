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
const mysql_database_1 = require("../mysql.database");
const Sequelize = __importStar(require("sequelize"));
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('pessoas_juridicas', {
    idpessoajuridica: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpessoas_juridicas'
    },
    idpessoa: Sequelize.DataTypes.INTEGER,
    razaoSocial: Sequelize.DataTypes.STRING,
    cnpj: Sequelize.DataTypes.NUMBER
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVzc29hc2p1cmlkaWNhcy5tb2RlbHMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbW9kZWxzL3Blc3NvYXNqdXJpZGljYXMubW9kZWxzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBa0Q7QUFDbEQscURBQXVDO0FBR3ZDLGtCQUFlLDhCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUNsRCxtQkFBbUIsRUFDbkI7SUFDSSxnQkFBZ0IsRUFBRTtRQUNkLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDakMsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLHFCQUFxQjtLQUMvQjtJQUNELFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDckMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUN2QyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0NBQ25DLENBQ0osQ0FBQyJ9