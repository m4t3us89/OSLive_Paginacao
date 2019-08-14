const jwt = require('jsonwebtoken');
var createError = require('http-errors');

const verify_header_token = (req,res,next)=>{

    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        
        jwt.verify(bearerToken, 'secretkey', (err, authData) => {
       
            if(err) {
                console.log('Error Token: ', new Date().toLocaleString() + err );
                next(createError(403));
            }else{
                console.log('Valid Token: ', new Date().toLocaleString() + authData );
                next()
            }

        });      

    } else  next(createError(403))

}

module.exports = verify_header_token;
