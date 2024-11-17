// Pas utilse pour la suite
import { v4 as uuidv4 } from 'uuid';

export default class Park {
    // @ts-ignore
    id : string;
    spotId : number;
    startedAt : string;
    endedAt: string;
    price : number;
    paid : boolean;


    // @ts-ignore
    constructor(spotId: number, startedAt: string, endedAt: string, price: number, paid: boolean) {
        this.id = uuidv4();
        this.spotId = spotId;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }
}
