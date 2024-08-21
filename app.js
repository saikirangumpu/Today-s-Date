const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const dateTime = new Date()
  const result = `${dateTime.getDate()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getFullYear()}`
  response.send(result)
})

module.exports = app
