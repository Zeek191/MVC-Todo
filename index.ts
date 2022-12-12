import path from 'path'
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import authRouter from './src/routes/auth'

const app: Express = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../src/views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', authRouter)

app.get('*', (req, res, next) => {
    res.status(404).send('<h1>Its 404 endpoint</h1>')
})

app.listen(3000, () => {
    console.log('Server available on: http://localhost:3000/')
})
