import { Router } from 'express'
import * as motoCtrl from "../controllers/motorcycles.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', motoCtrl.index)

router.get('/new', motoCtrl.new)

router.post('/', isLoggedIn, motoCtrl.create)

export {
  router
}
