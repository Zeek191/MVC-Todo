import express from 'express'
import { authController, loginView } from '../controllers/authController'
import { dashboardView } from '../controllers/dashboardController'
import { Auth } from '../models/auth'

const router = express.Router()

router.get('/', loginView)
router.post('/auth', authController)

router.get('/dashboard', dashboardView)

export default router
