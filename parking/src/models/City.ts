import {GPS} from "../types/GPS";

export default class City {
    id: number;
    name: string;
    slug: string;
    location: GPS; // Utilisez un type plus approprié si nécessaire
    country: string;
    parkingIds: number[];

    constructor(id: number, name: string, slug: string, location: GPS, country: string) {
        this.id = id; // Id de la ville
        this.name = name; // Nom de la ville
        this.slug = slug; // Slug pour les URL
        this.location = location; // Localisation de la ville
        this.country = country; // Pays de la ville
        this.parkingIds = []; // Initialiser comme tableau vide
    }

    addParking(parkingId: number): void {
        if (!this.parkingIds.includes(parkingId)) {
            this.parkingIds.push(parkingId); // Ajoutez le parkingId si ce n'est pas déjà présent
        }
    }
}
