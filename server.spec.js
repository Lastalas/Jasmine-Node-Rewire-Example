var rewire = require('rewire'),
    server = rewire( __dirname + '/server.js');

    
describe('Test page loader', function (){
   it('Should give me the message query string', function(done) {
       var  req = {
                query: {
                    message:'Hi Tester'
                }
            },
            res = {
                end: function (msg){
                    expect(msg).toEqual ('Found this message: Hi Tester');
                    done ();
                }    
                
            },
            loadMethod = server.__get__('pageLoader');
        loadMethod(req,res);
   });
   
   it('Should tell me when no message found', function(done) {
       var  req = {
                query: {}
            },
            res = {
                end: function (msg){
                    expect(msg).toEqual ('No message found.');
                    done ();
                }    
            },
            loadMethod = server.__get__('pageLoader');

        loadMethod(req,res); 
    });
});