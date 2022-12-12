import type { Task } from './task'

export type User = {
    username: string
    password: string
    tasks?: Task[]
}
