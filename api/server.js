var createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const routerApiAuthToken = require('./src/api-auth-token/router');
const port = process.env.PORT || 5000;
const routerAppSimulacoes = require('./src/simulacoes/router'); 

const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser({}))
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api-auth-token', routerApiAuthToken);
app.use('/simulacoes' , routerAppSimulacoes);



app.use(function(req, res, next) {
    next(createError(404));
});


app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(
        {
        error : {'Status' : (err.status  || 500) , 'Message' : res.locals.message }
        }   
    ) 
});
  

app.listen( port , ()=> console.log('Servidor Online na porta ' + port));


module.exports = app;
