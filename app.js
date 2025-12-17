import express from 'express'
import process from 'node:process'

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
    console.info(`server started on port ${PORT}`)
})
