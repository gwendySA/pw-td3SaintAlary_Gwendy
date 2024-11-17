import { Hono } from 'hono'
import { ParkingController } from '../controllers/ParkingController'

const parkingRoutes = new Hono()

parkingRoutes.get('/', ParkingController.readAll)
parkingRoutes.get('/:id', ParkingController.readOne)

export default parkingRoutes