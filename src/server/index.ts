import express from 'express'
import cors from 'cors'
import routeHandler from './routes/'

//activate an Express server with CORS

const app = express()
app.use(cors())

routeHandler(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Hacking the mainframe...')
  setTimeout(() => {
    console.log('🚀  I need to capture the Avatar!')
  }, 2000)
})