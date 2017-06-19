const express 		= require('express');
const app 			= express();

const request 		= require('request');

const PORT = 8080;


//allow for inbrowser calls
app.get('/',  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.get('/', (req,response,next) => {
	request('https://pitstopconnect.com/js/sample.json', (err,res,body) => {
	if (err) {
		console.log(err + res.statusCode)
	}
	else {
		let data = body
		response.send(JSON.parse(data))
		console.log(data)
	}
});

	
})












app.listen( PORT, () =>{
	console.log("listening on http:/localhost:" + PORT)

})