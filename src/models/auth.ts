import { readFile } from 'fs'
import path from 'path'
import { Credentials } from './user'

export class Auth {
    signIn(
        username: string,
        password: string,
        cb: (status: boolean) => void
    ): void {
        readFile(
            path.join(__dirname, '../../../src/data/users.json'),
            { encoding: 'utf8' },
            (error, data) => {
                if (error) console.error('Unexpected issue occured')

                const parsedBody: Credentials[] = JSON.parse(data)
                const foundedUser = parsedBody.filter(
                    (user) =>
                        user.username === username && user.password === password
                )

                if (!foundedUser.length) return cb(false)
                cb(true)
            }
        )
    }
}
