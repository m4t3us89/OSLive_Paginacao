const jwt = require('jsonwebtoken');
const ctrlLogin  = {};

ctrlLogin.login = (req,res)=>{
    const user = {
        id: 1, 
        username: 'm4t3us',
        email: 'allissonmateus89@gmail.com'
    }
    
    jwt.sign({user}, 'secretkey', { expiresIn: '40h' }, (err, token) => {
        res.json({
          token
        });
    });
}

module.exports = ctrlLogin;
