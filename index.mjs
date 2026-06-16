import exress from 'express'

const PUERTO =  process.env.PORT || 3000

const app = exress()

app.get('/test', (req, res)=>{
    res.send('hola')
})

app.listen(PUERTO)