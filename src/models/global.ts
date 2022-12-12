export class Global {
    private static _user?: string

    constructor() {
        Global._user = undefined
    }

    public static get user(): string | undefined {
        return this._user
    }

    public static set user(user: string | undefined) {
        this._user = user
    }
}
