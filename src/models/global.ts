import type { User } from './user'

export class Global {
    private static _user?: User

    constructor() {
        Global._user = undefined
    }

    public static get user(): User | undefined {
        return this._user
    }

    public static set user(user: User | undefined) {
        this._user = user
    }
}
