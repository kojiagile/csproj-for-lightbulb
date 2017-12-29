// var hostname = "127.0.0.1";
// var port = 8080;
// var http = require('http'); //httpモジュールのインポート
// var server = http.createServer();　
// // var settings = require('./settings') //同じディレクトリのsettingsファイルをrequire
// // console.log(settings); 
// server.on('request', function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});　
//   res.write('hello world 2');
//   res.end();
// })


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// 
// 

// const express = require('express');

// const app = express();

// app.listen(8080);
// console.log('Server is online.');

// app.post('/', function(req, res) {
//     res.send('POST is sent.');
// })

// app.get('/', function(req, res) {
//     res.send('GET is sent.');
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(8080);
console.log('Server is online.');

app.post('/', function(req, res) {
	var reqBody = req.body;
	var notifyType = reqBody.build.notifyType;
	var result = reqBody.build.buildResult;
    
    // console.log(req.body);
    // パラメータ名、nameを出力
    // console.log(req.body.name);
    // 
    // console.log(reqBody.build.notifyType);

    // res.send('POST request to the homepage');
    // 
	if (notifyType === "buildStarted") {
		// When build started
		console.log("build started: ", result)

	} else if (notifyType === "changesLoaded") {
		console.log("build in progress", result)

	} else if (notifyType === "beforeBuildFinish") {
		// right before a build is finished
		console.log("build is almost finished: ", result)

	} else if (notifyType === "buildFinished") {
		// When build is finished 
		console.log("build finished: ", result)

	} else if (notifyType === "buildInterrupted") {
		console.log("build interrupted: ", result)
	}
	
	
    // res.send('test');
    res.set('Content-Type', 'application/json');
  	res.json(req.body.name);
	
})


// app.get('/', function(req, res) {

//     // res.send(req.body);
//     // res.send(req.body.test);
//     res.send('Get request to the homepage');
// })