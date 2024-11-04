import { html } from 'hono/html';
import Parking from '../../models/Parking'; // Assurez-vous que ce modèle est défini

type ListProps = {
    parkings: Parking[];
}

export const ParkingListView = ({ parkings }: ListProps) => {
    return html`
        <h2>Nos Parkings</h2>
        <ul>
            ${parkings.map(parking => html`
                <li>
                    <a href="/parkings/${parking.id}">${parking.name} (${parking.numberOfSpots} places)</a>
                </li>
            `)}
        </ul>
        <a href="/">Retour à l'accueil</a>
    `;
}

type DetailProps = {
    parking: Parking;
}

export const ParkingDetailView = ({ parking }: DetailProps) => {
    return html`
        <h2>${parking.name}</h2>
        <p>Nombre de places : ${parking.numberOfSpots}</p>
        <p>Tarif horaire : €${parking.hourlyRate.toFixed(2)}</p>
        <p>Statut : ${parking.opened ? 'Ouvert' : 'Fermé'}</p>
        <p>Coordonnées : Latitude ${parking.location.latitude}, Longitude ${parking.location.longitude}</p>
        <a href="/parkings">Retour à la liste des parkings</a>
    `;
}
