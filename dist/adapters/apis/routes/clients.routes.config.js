"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const common_routes_config_1 = require("./common.routes.config");
const clients_middleware_1 = __importDefault(require("../middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .get(clients_controller_1.default.listClients)
            .post(clients_controller_1.default.createClient);
        this.app.route(`/clients/bulk`)
            .post(clients_middleware_1.default.uploadFile().single('file'), clients_middleware_1.default.parseXlsx, clients_controller_1.default.createClientBulk);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL2NsaWVudHMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyRkFBa0U7QUFDbEUsaUVBQTREO0FBQzVELDJGQUFrRTtBQUVsRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDbEMsSUFBSSxDQUFDLDRCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN0QixJQUFJLENBQ0QsNEJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUM3Qyw0QkFBaUIsQ0FBQyxTQUFTLEVBQzNCLDRCQUFpQixDQUFDLGdCQUFnQixDQUNyQyxDQUFBO1FBRVQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQW5CRCxzQ0FtQkMifQ==