//showing random quote
window.onload = function(e){ 
    quote_gen();

    document.getElementById("orange").onclick = colorifyOrange;
	document.getElementById("green").onclick = colorifyGreen;
	document.getElementById("yellow").onclick = colorifYellow;
	document.getElementById("blue").onclick = colorifyBlue;
	
}


function quote_gen(){

	var textArray = [
    'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    'It is better to fail in originality than to succeed in imitation.',
    'The road to success and the road to failure are almost exactly the same.',
    'Success usually comes to those who are too busy to be looking for it.',
    'Opportunities don\'t happen. You create them.'
];

var randomNumber = Math.floor(Math.random()*textArray.length);

var quoteelement = document.getElementById("quote_div");

quoteelement.innerHTML=textArray[randomNumber];

}





function colorifyOrange(){
	var quoteelement = document.getElementById("quote_div");
	quoteelement.style.color = "orange";
	quoteelement.style.backgroundColor = "blue";
	quoteelement.style.fontFamily = "Arial";
	quoteelement.style.fontSize = "17";
	quoteelement.style.border = "2px solid orange";
	

}

function colorifyGreen(){
	var quoteelement = document.getElementById("quote_div");
	quoteelement.style.color = "green";
	quoteelement.style.backgroundColor = "black";
	quoteelement.style.fontFamily = "Courier New";
	quoteelement.style.fontSize = "16";
	quoteelement.style.border = "2px solid green";

}

function colorifYellow(){
	var quoteelement = document.getElementById("quote_div");
	quoteelement.style.color = "yellow";
	quoteelement.style.backgroundColor = "red";
	quoteelement.style.fontFamily = "Comic Sans MS";
	quoteelement.style.fontSize = "14";
	quoteelement.style.border = "2px solid yellow";

}

function colorifyBlue(){
	var quoteelement = document.getElementById("quote_div");
	quoteelement.style.color = "blue";
	quoteelement.style.backgroundColor = "gray";
	quoteelement.style.fontFamily = "Impact";
	quoteelement.style.fontSize = "15";
	quoteelement.style.border = "2px solid blue";

}

