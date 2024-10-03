import { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../utils/generateRandomNumberld";

export default class Parking {
    id: number;
    name: string;
    city_id: string;
    location: GPS;
    numberOfSpots: number; //strictement positive
    opened: boolean;
    hourlyRate: number; // strictement positive
    parkIds: number[] = [];

    constructor(name_: string, city_id_: string, location_: GPS, numberOfSpots_: number, opened_: boolean, hourlyRate_: number, parkIds_: number[]) {
        this.id = generateRandomNumberId();
        this.name = name_;
        this.city_id = city_id_;
        this.location = location_;
        this.numberOfSpots = numberOfSpots_;
        this.opened = opened_;
        this.hourlyRate = hourlyRate_;
        this.parkIds = parkIds_;
    }
}