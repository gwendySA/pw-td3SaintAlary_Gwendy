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
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get slug(): string {
        return this._slug;
    }
    set slug(value: string) {
        this._slug = value;
    }
    get parkingIds(): Array<number> {
        return this._parkingIds;
    }
    set parkingIds(value: Array<number>) {
        this._parkingIds = value;
    }
    get country(): string {
        return this._country;
    }
    set country(value: string) {
        this._country = value;
    }
    get location(): GPS {
        return this._location;
    }
    set location(value: GPS) {
        this._location = value;
    }
}