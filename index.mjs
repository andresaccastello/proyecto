import express from 'express'
import 'dotenv/config'
import pg from 'pg'

const PUERTO = process.env.PORT || 3000

const app = express()

const pool = new pg.Pool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    database: process.env.BD_NAME,
    password: process.env.BD_PASS,
    port: process.env.BD_PORT
})

app.get('/test', (req, res) => {
    res.send('hola')
})

app.get('/prueba', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM mensajes')
        res.json(resultado.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.listen(PUERTO, () => {
    console.log(`Servidor funcionando en puerto ${PUERTO}`)
})