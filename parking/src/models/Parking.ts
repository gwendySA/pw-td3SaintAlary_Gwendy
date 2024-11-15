import { GPS } from "../types/GPS";
import Spot from "./Spot";

export default class Parking {
    id: string;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number; //strictement positive
    opened: boolean;
    hourlyRate: number; // strictement positive

    constructor(id_: string ,name_: string, city_id_: number, location_: GPS, numberOfSpots_: number, hourlyRate_: number) {
        this.id = id_;
        this.name = name_;
        this.city_id = city_id_;
        this.location = location_;
        this.numberOfSpots = numberOfSpots_;
        this.opened = true;
        this.hourlyRate = hourlyRate_;
    }
}