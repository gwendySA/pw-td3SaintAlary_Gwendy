export default class Spot {
    id : string;
    parking_id : number;


    constructor(id: string, parking_id: number) {
        this.id = id;
        this.parking_id = parking_id;
    }
}