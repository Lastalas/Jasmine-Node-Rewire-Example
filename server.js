var express = require('express'),
    app = express(),
    http = require ('http');
    
    app.use(express.bodyParser());
    
    app.get('/loadPage', pageLoader);
    
    function pageLoader (req, res){
        if (req.query.message && req.query.message !== '' ){
            res.end('Found this message: ' + req.query.message);
        } else if (req.query.callback && req.query.callback !== ''){
            http.get('http://test.test', function (response){
                res(response);
            })
            .on('error', function (e){
                res(e);
            })
        } else {
            res.end('No message found.');
        }
    };
    
    app.listen(process.env.PORT);
