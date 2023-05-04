"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayDatabase = void 0;
class ArrayDatabase {
    constructor() {
        this._data = {};
    }
    static getInstance() {
        if (!ArrayDatabase._instance) {
            ArrayDatabase._instance = new ArrayDatabase();
        }
        return ArrayDatabase._instance;
    }
    list(type) {
        let objs = [];
        if (this._data[type] === undefined) {
            return [];
        }
        for (let data of this._data[type]) {
            objs.push(data);
        }
        return objs;
    }
}
exports.ArrayDatabase = ArrayDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvYXJyYXkuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFDO1lBQ3hCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNqRDtRQUVELE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDYixJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7UUFFckIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBQztZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsS0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUE3QkQsc0NBNkJDIn0=