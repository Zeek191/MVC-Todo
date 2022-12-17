import express from 'express'
import {
    addTaskController,
    dashboardView,
    removeTaskController,
} from '../controllers/dashboardController'

const router = express.Router()

router.get('/', dashboardView)

router.post('/add-task', addTaskController)

router.delete('/delete-task', removeTaskController)

export default router
