var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join(__dirname, 'src')))

// var port = process.env.PORT || 5000
// app.listen(port)
app.listen(process.env.PORT || 3000)
