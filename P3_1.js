var http = require('http');
http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('This is Home Page.');
    }
    else if(req.url=='/exam'){
        var code = '<html> <head> <title>Course Schedule</title></head><body><h1>Course Schedule</h1><table border="1"> <tr> <th>Date</th><th>Code</th><th>Subject</th></tr> <tr><td>28/08/2023</td><td>2CEIT501</td><td>Computer Architecture and Organization</td></tr> <tr><td>30/08/2023</td><td>2CEIT503</td><td>Computer Network</td></tr> <tr><td>01/09/2023</td><td>2CEIT5PE4</td><td>Software Packages</td></tr> </table> </body> </html>'
        res.write(code);
    } 
    else if(req.url=='/exam/semester_end'){
        res.write('Regular exam.');
    }
    res.end("\n\nDivy Patel_21012011072");
}).listen(1072);
console.log("Connected Successfully.");