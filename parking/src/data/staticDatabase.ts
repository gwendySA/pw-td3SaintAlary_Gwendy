// Pour instancier les obejts city et parking
import City from '../models/City';
import Parking from '../models/Parking';
import Park from "../models/Park";
import Spot from "../models/Spot";
import {toSlug} from "../utils/toSlug";

export const cities: City[] = [
    new City(1, "Aix-en-Provence", toSlug("Aix-en-Provence"), { latitude: 43.533329, longitude: 5.43333 }, "France", []),
    new City(2, "La Spezia", toSlug("La Spezia"), { latitude: 44.238366, longitude: 9.6912326 }, "Italy", []),
    new City(3, "Aix-la-Chapelle", toSlug("Aix-la-Chapelle"), { latitude: 50.776351, longitude: 6.083862 }, "Germany", []),
    new City(4, "San Cristóbal de La Laguna", toSlug("San Cristóbal de La Laguna"), { latitude: 28.4871807, longitude: -16.313879 }, "Spain", []),
    new City(5, "Newcastle upon Tyne", toSlug("Newcastle upon Tyne"), { latitude: 54.9738474, longitude: -1.6131572 }, "England", [])
];

export const parkings: Parking[] = [
    new Parking('A','Parking A', cities[0].id, {latitude: 43.533329, longitude: 5.43333}, 100, 4.5),
    new Parking('B', 'Parking B',cities[1].id, {latitude: 44.238366, longitude: 9.6912326}, 50, 3),
    new Parking('D','Parking C', cities[1].id, {latitude: 44.238366, longitude: 9.6912326}, 80, 2.5),
    new Parking('E', 'Parking D',cities[2].id, {latitude: 50.776351, longitude: 6.083862}, 40, 2.80),
    new Parking('F', 'Parking E',cities[3].id, {latitude: 28.487180709838867, longitude: -16.313879013061523}, 70, 3.10),
    new Parking('G', 'Parking F',cities[4].id, {latitude: 54.9738474, longitude: -1.6131572}, 60, 2.40),
    new Parking('H','Parking G', cities[4].id, {latitude: 54.9738474, longitude: -1.6131572}, 90, 3.20),
];
// associer les parkings aux villes 
parkings.forEach(parking => {
    const city = cities.find(city => city.id === parking.city_id);
    if (city) {
        city.addParking(parking.id);
    }
});
