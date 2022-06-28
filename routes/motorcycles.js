import { Router } from 'express'
import * as motoCtrl from "../controllers/motorcycles.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', motoCtrl.index)

router.get('/new', motoCtrl.new)

router.get('/:id', motoCtrl.show)

router.get('/:id/edit', isLoggedIn, motoCtrl.edit)

router.post('/', isLoggedIn, motoCtrl.create)
router.post('/:id/reviews', motoCtrl.createReview)

router.delete('/:id', motoCtrl.delete)

export {
  router
}
