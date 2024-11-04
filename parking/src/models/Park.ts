import { v4 as uuidv4 } from 'uuid';

export default class Park {
    // @ts-ignore
    id : string;
    spot_id : number;
    startedAt : string;
    endedAt: string;
    price : number;
    paid : boolean;


    // @ts-ignore
    constructor(spot_id: number, startedAt: string, endedAt: string, price: number, paid: boolean) {
        this.id = uuidv4();
        this.spot_id = spot_id;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }
}