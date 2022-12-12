export type Credentials = {
    username: string
    password: string
}

export interface User extends Credentials {
    tasks: any
}
