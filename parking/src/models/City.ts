import { toSlug } from "../utils/toSlug";
import {generateRandomNumberId} from "../utils/generateRandomNumberld";
import { GPS } from "../types/GPS";

export class City {
    private _id: number;
    private _name: string;
    private _slug: string;
    private _parkingIds: Array<number>;
    private _country: string;
    private _location: GPS;

    constructor(name: string, country: string, latitude: number, longitude: number) {
        this._id = generateRandomNumberId();
        this._name = name;
        this._slug = toSlug(name);
        this._parkingIds = [];
        this._country = country;
        this._location = { latitude, longitude };
    }

}