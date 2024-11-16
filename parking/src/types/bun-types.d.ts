/// généré par l'ia a partir d'un forum car il y avait un soucis qui nous bloquaient />
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
