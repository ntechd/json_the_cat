const request = require("request");
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
})