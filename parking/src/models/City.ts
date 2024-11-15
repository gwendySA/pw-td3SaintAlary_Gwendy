import {GPS} from "../types/GPS";

export default class City {
    id: number;
    name: string;
    slug: string;
    location: GPS;
    country: string;
    parkingIds: number[];


    constructor(id: number, name: string, slug: string, location: GPS, country: string, parkingIds: number[]) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.location = location;
        this.country = country;
        this.parkingIds = parkingIds;
    }

    addParking(parkingId: string): void {
        // Si parkingIds n'est pas encore défini, on le créer comme un tableau vide
        if (!this.parkingIds) {
            this.parkingIds = [];
        }
    }


}
