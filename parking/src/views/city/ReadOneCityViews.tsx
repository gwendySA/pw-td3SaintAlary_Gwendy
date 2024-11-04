import { html } from 'hono/html';
import City from '../../models/City';
import Parking from '../../models/Parking'; // Assurez-vous que ce modèle est défini

type Props = {
    city: City;
    cityParkings: Parking[];
}

export const ReadOneCityView = ({ city, cityParkings }: Props) => {
    return html`
        <h2>Informations sur ${city.name}</h2>
        <p>Pays : ${city.country}</p>
        <p>Coordonnées : Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>

        <h2>Parkings à ${city.name}</h2>
        ${cityParkings.length > 0 ? html`
            <ul>
                ${cityParkings.map(parking => html`
                    <li>
                        <strong>${parking.name}</strong><br>
                        Nombre de places : ${parking.numberOfSpots}<br>
                        Tarif horaire : €${parking.hourlyRate.toFixed(2)}<br>
                        Statut : ${parking.opened ? 'Ouvert' : 'Fermé'}
                    </li>
                `)}
            </ul>
        ` : html`
            <p>Aucun parking disponible dans cette ville.</p>
        `}

        <a href="/cities">Retour aux villes</a>
    `;
}
