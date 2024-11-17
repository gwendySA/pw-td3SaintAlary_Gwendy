import { html } from "hono/html";
import { Layout } from "../shared/Layout";
import City from '../../models/City';
import Parking from '../../models/Parking';

type Props = {
    city: City;
    cityParkings: Parking[];
};

export const ReadOneCityView = ({ city, cityParkings }: Props) => {
    return Layout({
        pageTitle: ``,// pas la nécessité de remplir
        headerTitle: ``,// ici non plus
        children: html`<!-- on génère du html-->
            <section>
                <p>Pays : ${city.country}</p>
                <p>Coordonnées : Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>
            </section>

            <section>
                <h2>Parkings disponibles</h2>
                ${cityParkings.length > 0 ? html`<!-- il y a au moins un parking associé-->
                    <ul>
                        ${cityParkings.map(parking => html`
                            <li>
                                <strong>${parking.name}</strong><br>
                                Nombre de places : ${parking.numberOfSpots}<br>
                                Tarif horaire : €${parking.hourlyRate.toFixed(2)}<br><!-- 2 chiffres après la virgule-->
                                Statut : ${parking.opened ? "Ouvert" : "Fermé"}<!-- booléen-->
                            </li>
                        `)}
                    </ul>
                ` : html`<p>Aucun parking disponible dans cette ville.</p>`}
            </section>
            
            <a href="/cities">Retour à la liste des villes</a>
        `,
    });
};
