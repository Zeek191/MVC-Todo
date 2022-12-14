import { Request, Response } from 'express'
import { Auth } from '../models/auth'
import { createPropertyIfNotEmptyValue } from '../helpers/createPropertyIfNotEmptyValue'
import { Global } from '../models/global'
import type { Credentials } from '../models/user'

function authController(req: Request<{}, {}, Credentials>, res: Response) {
    const { username, password } = req.body

    const authController = new Auth()

    authController.signIn(username, password, (status: boolean) => {
        if (!status) return res.redirect('/?valid=false')

        Global.user = username
        return res.redirect('/dashboard')
    })
}

function loginView(
    req: Request<{}, {}, {}, { valid?: string }>,
    res: Response
) {
    return res.render('auth.pug', {
        ...createPropertyIfNotEmptyValue(
            'error',
            req.query.valid && 'cant sign in'
        ),
    })
}

function registerView(req: Request, res: Response) {}

export { loginView, registerView, authController }
