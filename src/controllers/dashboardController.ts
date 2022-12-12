import { Request, Response } from 'express'
import { Global } from '../models/global'

function dashboardController(req: Request, res: Response) {}

function dashboardView(req: Request, res: Response) {
    res.render('dashboard.pug')
}

export { dashboardView, dashboardController }
