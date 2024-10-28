import City from '../models/City';
import Parking from '../models/Parking';

export const cities: City[] = [
    new City("Aix-en-Provence", "France", 43.533329, 5.43333),
    new City("La Spezia", "Italie", 44.238366, 9.6912326),
    new City("Aix-la-Chapelle", "Allemagne", 50.776351, 6.083862),
    new City("San Cristóbal de La Laguna", "Espagne", 28.487180709838867, -16.313879013061523),
    new City("Newcastle upon Tyne", "Angleterre", 54.9738474, -1.6131572)
];

export const parkings: Parking[] = [
    new Parking("A", cities[0].id, {latitude: 43.533329, longitude: 5.43333}, 100, 4.5),
    new Parking("B", cities[1].id, {latitude: 44.238366, longitude: 9.6912326}, 50, 3),
    new Parking("C", cities[1].id, {latitude: 44.238366, longitude: 9.6912326}, 80, 2.5),
    new Parking("D", cities[2].id, {latitude: 50.776351, longitude: 6.083862}, 40, 2.80),
    new Parking("E", cities[3].id, {latitude: 28.487180709838867, longitude: -16.313879013061523}, 70, 3.10),
    new Parking("F", cities[4].id, {latitude: 54.9738474, longitude: -1.6131572}, 60, 2.40),
    new Parking("G", cities[4].id, {latitude: 54.9738474, longitude: -1.6131572}, 90, 3.20),
];

parkings.forEach(parking => {
    const city = cities.find(city => city.id === parking.city_id);
    if (city) {
        city.addParking(parking.id);
    }
});