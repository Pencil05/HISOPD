const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const auth = require('./router/auth')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api',auth)



app.listen(5000,console.log('วิ่งอยู่ครับ'))