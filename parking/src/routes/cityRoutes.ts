import { Hono } from 'hono'
import { ReadAllCitiesController } from '../controllers/ReadAllCitiesController'
import { ReadOneCityController } from '../controllers/ReadOneCityController'

const cityRoutes = new Hono()

cityRoutes.get('/', ReadAllCitiesController.handle)
cityRoutes.get('/:slug', ReadOneCityController.handle)

export default cityRoutes