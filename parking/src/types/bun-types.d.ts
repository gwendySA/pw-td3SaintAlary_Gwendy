/// <reference types="bun-types" />
declare module "bun:sqlite" {
    export class Database {
        constructor(filename: string);
        run(sql: string, ...params: any[]): void;
        query<T = any>(sql: string): {
            all(...params: any[]): T[];
            get(...params: any[]): T;
        };
    }
}
