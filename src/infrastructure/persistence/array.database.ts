import { IDatabase } from "./database.interface";


export class ArrayDatabase implements IDatabase{
    private static _instance: ArrayDatabase;
    private _data: any;

    private constructor(){
        this._data = {};
    }

    public static getInstance(): ArrayDatabase {
        if(!ArrayDatabase._instance){
            ArrayDatabase._instance = new ArrayDatabase();
        }

        return ArrayDatabase._instance;
    }

    list(type: string): any[] {
        let objs: any[] = [];

        if(this._data[type] === undefined){
            return [];
        }

        for(let data of this._data[type]){
            objs.push(data);
        }

        return objs;
    }
}