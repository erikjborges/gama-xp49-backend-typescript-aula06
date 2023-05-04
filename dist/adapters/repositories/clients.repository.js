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
Object.defineProperty(exports, "__esModule", { value: true });
const array_database_1 = require("../../infrastructure/persistence/array.database");
class ClientsRepository {
    constructor(_database) {
        this._database = _database;
        this._type = 'client';
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.list(this._type);
        });
    }
}
exports.default = new ClientsRepository(array_database_1.ArrayDatabase.getInstance());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9jbGllbnRzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxvRkFBZ0Y7QUFHaEYsTUFBTSxpQkFBaUI7SUFHbkIsWUFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUZoQyxVQUFLLEdBQVcsUUFBUSxDQUFDO0lBSWpDLENBQUM7SUFFSyxJQUFJOztZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsQ0FDaEMsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FDOUIsQ0FBQSJ9