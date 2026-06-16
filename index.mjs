import exress from 'express'
/*import 'dotenv/config'*/
import pg from 'pg'
const PUERTO =  process.env.PORT || 3000

const app = exress()
/*CONSULTA */
const pool = new pg.Pool({
    host:process.env.BD_HOST,
    user: process.env.BD_USER,
    database : process.env.BD_NAME,
    pass: process.env.BD_PASS,
    port: process.env.BD_PORT
})

app.get('/test', (req, res)=>{
    res.send('hola')
})

app.get('/prueba', async (req, res)=>{
    const resultado = await pool.query('SELECT * FROM mensajes') 
    res.json(resultado.rows)
})

app.listen(PUERTO)