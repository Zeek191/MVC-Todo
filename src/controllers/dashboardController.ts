import { Request, Response } from 'express'
import { Global } from '../models/global'

function addTaskController(req: Request, res: Response) {
    const { title, description } = req.body
}

function removeTaskController(req: Request, res: Response) {}

function dashboardView(req: Request, res: Response) {
    const signedUser = Global.user

    if (!signedUser) res.redirect('/?valid=false')
    res.render('dashboard.pug', {
        tasks: signedUser?.tasks || [],
    })
}

export { dashboardView, addTaskController, removeTaskController }
