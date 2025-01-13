import fs from 'fs'

import http from 'http'

http.createServer(function (req, res) {
    fs.readFile('indexs.html', function(err,data) {
        console.log("Port listen on 3000");
        if(err) {
            fs.readFile('errors.html', function(error, noData){
                if(error) {
                    // res.writeHead(404, {"content-type" : "text/html"});
                    res.writeHead(302, {location : "https://www.geeksforgeeks.org/"} )
                    res.end("file not found")  
                    return;
                }
                res.writeHead(404, {"content-type" : "text/html"});
                res.end(noData)
            })
            // res.end(JSON.stringify(err))
            return;
        }
        res.writeHead(200);
        res.end(data)
    })
}).listen(8000)