var rewire = require('rewire'),
    server = rewire(__dirname + '/server.js'),
    http = server.__get__('http'),
    loadMethod = server.__get__('pageLoader');



describe('Test page loader', function() {
    it('Should give me the message query string', function(done) {
        var req = {
            query: {
                message: 'Hi Tester'
            }
        },
        res = {
            end: function(msg) {
                expect(msg).toEqual('Found this message: Hi Tester');
                done();
            }

        };
        loadMethod(req, res);
    });

    it('Should tell me when no message found', function(done) {
        var req = {
            query: {}
        },
        res = {
            end: function(msg) {
                expect(msg).toEqual('No message found.');
                done();
            }
        };
        loadMethod(req, res);
    });

    it('If provided a callback parameter, an http get request should be issued', function(done) {
        var spy = spyOn (http, 'get').andCallFake (function(){
            expect (spy).toHaveBeenCalled();
            done();
            return {
                on: function (){}
            }
        });
        
        loadMethod({
            query: {
                callback: 'callMe'
            }
        }, {});
    });
});
