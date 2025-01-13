//create file using fs file system also read and write the specific amount of data using start and end into another file.

// serve the static file html into http create server.


import fs from 'fs';

let readline = fs.createReadStream('doc.txt', {
    start: 100,
    end: 1000,
});

const data = "hey there"

fs.writeFile("abc.js", data, error => {
    if(error) console.log("file not found" + data);
    console.log(data);
})

fs.readFile("abc.js", "utf8", (err, data) => {  //utf --> encoding
    if(err) console.log("error found");
    console.log("what day is it?");
})

import http from 'http'
http.createServer(function(req,res){
    // console.log("Port listen on 8000");
    res.writeHead(200, {'content-type' : 'html'});
    res.write('<h1> Hello World </h1>');
    res.end();
}).listen(8000);
