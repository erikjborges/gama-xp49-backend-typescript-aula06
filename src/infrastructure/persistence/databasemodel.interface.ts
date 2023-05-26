import { IDatabase } from "./database.interface";


export interface IDatabaseModel extends IDatabase {
    createModel(name: string, properties: any): any,
    list(type: any, includes?: object): any
}