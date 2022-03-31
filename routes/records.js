import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'

const router = Router()

router.get('/', recordsCtrl.getRecord)
router.get('/recordsdb', recordsCtrl.getDbRecords)

export {
  router
}