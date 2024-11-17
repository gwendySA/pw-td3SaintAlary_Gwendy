// on ne se sert pas de ce fichier 
export default class Spot {
    id : number;
    parking_id : number;


    constructor(id: number, parking_id: string) {
        this.id = id;
        this.parking_id = parking_id;
    }
}

