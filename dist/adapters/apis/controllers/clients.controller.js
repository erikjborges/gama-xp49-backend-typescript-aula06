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
const list_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/list.client.usecase"));
class ClientsController {
    listClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield list_client_usecase_1.default.execute();
            res.status(200).send(clients);
        });
    }
}
exports.default = new ClientsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvY2xpZW50cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0dBQXFGO0FBRXJGLE1BQU0saUJBQWlCO0lBQ2IsV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sT0FBTyxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==