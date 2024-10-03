import { v4 as uuidv4 } from 'uuid';

export default class Park {
    // @ts-ignore
    id : uuidv4;
    spot_id : number;
    startedAt : Date;
    endedAt: Date;
    price : number;
    paid : boolean;


    // @ts-ignore
    constructor(id: uuidv4, spot_id: number, startedAt: Date, endedAt: Date, price: number, paid: boolean) {
        this.id = id;
        this.spot_id = spot_id;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }
}