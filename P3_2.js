var http = require('http');
var url = require('url');
var server = http.createServer(function (req,res) {
    const q = url.parse(req.url, true).query;
    const num1 = q.num1
    const num2 = q.num2

    if(num1>num2){
        res.write(`${num1} is greater than ${num2}.`);
        res.write('\n\n21012011072_Divy Patel');
        res.end();
    }
    else if(num1 == num2){
        res.write(`${num1} and ${num2} are same.`);
        res.write('\n\n21012011072_Divy Patel');
        res.end();
    }
    else{
        res.write(`${num1} is smaller than ${num2}`);
        res.write('\n\n21012011072_Divy Patel');
        res.end();
    }
});
server.listen(1072);