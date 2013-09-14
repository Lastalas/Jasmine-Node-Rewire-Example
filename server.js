var express = require('express'),
    app = express();
    
    app.use(express.bodyParser());
    
    app.get('/loadPage', pageLoader);
    
    function pageLoader (req, res){
        if (req.query.message && req.query.message !== '' ){
            res.end('Found this message: ' + req.query.message);
        } else {
            res.end('No message found.')
        }
    }
    
    app.listen(process.env.PORT);