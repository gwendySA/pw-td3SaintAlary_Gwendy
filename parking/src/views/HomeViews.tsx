import { html } from 'hono/html';

export const HomeView = (p: { cities: any[] }) => {
    return html`
        <img src="/static/parking.png" alt="Parking">
        <p>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
        <ul>
            <li><a href="/cities">Our Cities</a></li>
            <li><a href="/parkings">Our Car Parks</a></li>
        </ul>
    `;
}
