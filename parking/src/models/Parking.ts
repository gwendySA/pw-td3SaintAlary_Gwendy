import { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../utils/generateRandomNumberld";
import Spot from "./Spot";

export default class Parking {
    id: number;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number; //strictement positive
    opened: boolean;
    hourlyRate: number; // strictement positive
    parkIds: number[] = [];

    constructor(name_: string, city_id_: number, location_: GPS, numberOfSpots_: number, hourlyRate_: number) {
        this.id = generateRandomNumberId();
        this.name = name_;
        this.city_id = city_id_;
        this.location = location_;
        this.numberOfSpots = numberOfSpots_;
        this.opened = true;
        this.hourlyRate = hourlyRate_;
        this.parkIds = [];
        for (let i = 0; i < this.numberOfSpots; i++) {
            const spot = new Spot(i,this.id);
            this.parkIds.push(spot.id);
        }
    }
}