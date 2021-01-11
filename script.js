var dataarr=[]
const url="https://restcountries.eu/rest/v2/all"
$.get( url, function( data ) {
  	data.forEach(function(each){
  		dataarr.push(each)
  	})
});

function randomcountry()
{
	randelement=dataarr[Math.floor(Math.random() * dataarr.length)]
	$(".countrycard").removeClass("animate__animated animate__backInLeft");
	$(".countrycard").addClass("animate__animated animate__backOutLeft");
	setTimeout(function(){ 
		updatecard(randelement); 
	}, 1000);
	
}
function updatecard(countrydata){
	name=countrydata.name
	capital=countrydata.capital
	continent=countrydata.region
	population=countrydata.population
	if(population>1000000000)
		population=(population/1000000000).toFixed(2)+" B"
	else if(population>1000000)
		population=(population/1000000).toFixed(2)+" M"
	else if(population>1000)
		population=(population/1000).toFixed(2)+" K"
	currencycode=countrydata.currencies[0].code
	currencysymbol=countrydata.currencies[0].symbol
	language=countrydata.languages[0].name
	flagimg=countrydata.flag
	borders=countrydata.borders
	$("#flagimg").attr("src",flagimg);
	$("#name").text(name);
	$("#capital").text(capital);
	$("#continent").text(continent);
	$("#population").text(population);
	$("#currencyname").text(currencycode);
	$("#currencysymbol").text(currencysymbol);
	$("#language").text(language);
	$("#borderflagbox").html("")
	$(".countrycard").removeClass("animate__animated animate__backOutLeft");
	$(".countrycard").addClass("animate__animated animate__backInLeft");
	if(borders.length == 0)
		$("#borderflagbox").html("<p class='animate__animated animate__delay-1s animate__fadeIn'>No Border Country</p>")
	else
	{
		borders.forEach(function(eachbordercountry){
			imglink="https://restcountries.eu/data/"+eachbordercountry.toLowerCase()+".svg"
			genimgtag="<img class='animate__animated animate__delay-1s animate__zoomIn' src="+imglink+" title="+eachbordercountry+">"
			$("#borderflagbox").append(genimgtag)
	})
	}
}

