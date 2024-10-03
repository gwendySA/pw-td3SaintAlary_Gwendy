import { toSlug } from "../utils/toSlug";
import {generateRandomNumberId} from "../utils/generateRandomNumberld";
import { GPS } from "../types/GPS";

export default class City {
    id: number;
    name: string;
    slug: string;
    parkingIds: Array<number>;
    country: string;
    location: GPS;

    constructor(name: string, country: string, latitude: number, longitude: number) {
        this.id = generateRandomNumberId();
        this.name = name;
        this.slug = toSlug(name);
        this.parkingIds = [];
        this.country = country;
        this.location = { latitude, longitude };
    }

}