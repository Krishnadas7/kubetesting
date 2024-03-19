const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/will', (req, res) => {
    res.send('will')
  })

  app.get('/ready', (req, res) => {
    res.send('readyy')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})