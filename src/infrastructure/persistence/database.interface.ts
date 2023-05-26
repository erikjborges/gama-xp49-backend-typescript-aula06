export interface IDatabase {
    list(type: string): any[],
    create(type: any, data: any): any,
    // read(type: string, dataId: number): any,
    // update(type: string, data: any): boolean,
    // delete(type: string, dataId: number): boolean
}