const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Auto-import all routers in /router
const routersDir = path.join(__dirname, 'router')
fs.readdirSync(routersDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const router = require(path.join(routersDir, file))
    app.use('/api', router)
  })

app.listen(5000, () => console.log('วิ่งอยู่ครับ'))
