const request = require("request");

const fetchBreedDescription = function(breedName , callback){
	let url="https://api.thecatapi.com/v1/breeds/search?q="
	url = url+breedName;

	request(url,(error,response,body)=>{
		if(error)
		{
			callback(error,null);
		}
	const data = JSON.parse(body);
	if(data[0]===undefined)
	{
		callback(error,null);
	}
	else {
	callback(null,data[0]["description"]);	
	}
	})

};



module.exports = {fetchBreedDescription};


/*
const arguments = process.argv.slice(2);
let url="https://api.thecatapi.com/v1/breeds/search?q="
url = url+arguments[0];

request(url,(error,response,body)=>{
	if(error)
	{
		console.log(error);
		return;
	}

const data = JSON.parse(body);
if(data[0]===undefined)
{
	console.log("Requested Breed Not FOUND!!");
	return;
}
console.log(data[0]['description']);	
})*/