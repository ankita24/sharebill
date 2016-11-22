var express=require('express');
var app=express();
var databaseUrl="mongodb://localhost/Register";
var mongojs=require('mongojs');
var db=mongojs(databaseUrl);
var Register=db.collection('Register');
var bodyParser=require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/#/',function(req,res){
	console.log("fkjdf");
})
app.get('/person', function(req, res){
	console.log('Received find all persons request');
});

app.get('/person/:id',function(req,res){
	console.log('Received the friend');
	console.log(req.params.id);
	db.Register.findOne({email:new mongojs.ObjectId(req.params.id)},function(err,docs){
		console.log(docs);
		res.json(docs);
	})
})

app.post('/addPerson',function(req,res){
	console.log(req.body);
	db.Register.insert(req.body,function(doc){
		console.log(docs);
		res.json(docs);
	});
	return res.redirect('/login');
});

app.delete('/deletePerson/:id', function(req, res){
	console.log("Received delete one person request...");
});

app.put('/updatePerson', function(req, res){
	console.log("Received updatePerson request");
});

app.listen(3000);
console.log("Server running on port 3000");



