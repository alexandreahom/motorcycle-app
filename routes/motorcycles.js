import { Router } from 'express'
import * as motoCtrl from "../controllers/motorcycles.js"

const router = Router()

router.get('/', motoCtrl.index)

export {
  router
}
