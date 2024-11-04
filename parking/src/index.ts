import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { toSlug } from "./utils/toSlug"
import {cities, parkings} from "./data/staticDatabase"//importer les tableaux parkings et cities
import { HomeController } from './controllers/HomeController'
//import { trimTrailingSlash } from 'hono/trailing-slash'
import { ReadAllCitiesController } from './controllers/ReadAllCitiesController'
import cityRoutes from "./routes/cityRoutes";
import parkingRoutes from "./routes/parkingRoutes";
import {initializeDatabase} from "./TabPaking";


const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
//app.use('*', trimTrailingSlash())
app.get('/', HomeController.handle)
app.get('/cities', ReadAllCitiesController.handle)
// Routes
app.route('/cities', cityRoutes)
app.route('/parkings', parkingRoutes)

// toSlug
const chaine = "JE SUis un cas d'école";
const slug = toSlug(chaine);
console.log(slug);

// Log data
console.log(parkings);
console.log(cities);
// Appel de la fonction pour initialiser la base de données
initializeDatabase();
// Gestion de l'erreur a faire (étape 2.4)

export default app;
