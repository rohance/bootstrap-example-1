function calculate(){

var userinput = parseInt(document.getElementById('number-box').value);

if(userinput < 50) {
document.getElementById('result').innerText = "The number is less than 50" ;
}

else {

    document.getElementById('result').innerText = "It is greater than 50" ;

}

}