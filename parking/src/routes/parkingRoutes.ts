import { Hono } from 'hono'
import { ParkingController } from '../controllers/ParkingCotntroller'

const parkingRoutes = new Hono()

parkingRoutes.get('/', ParkingController.readAll)
parkingRoutes.get('/:id', ParkingController.readOne)

export default parkingRoutes