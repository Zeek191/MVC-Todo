import express from 'express'
import { authController, loginView } from '../controllers/authController'
import { dashboardView } from '../controllers/dashboardController'

const router = express.Router()

router.get('/', loginView)
router.post('/auth', authController)

export default router
