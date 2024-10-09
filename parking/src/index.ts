import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { toSlug } from "./utils/toSlug"
import { generateRandomNumberId } from "./utils/generateRandomNumberld"
import { cities, parkings } from "./data/staticDatabase"
import { HomeController } from './controllers/HomeController'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// Routes
app.get('/', HomeController.index)

// Example usage of toSlug
const chaine = "JE SUis un cas d'école"
const slug = toSlug(chaine)
console.log(slug)

// Logging data
console.log(parkings)
console.log(cities)

export default app