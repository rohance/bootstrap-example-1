function calculatediscount() {

var uPrice = parseFloat (document.getElementById("unitprice").value) ;

var quantity = parseInt ( document.getElementById("q").value);

var total = uPrice * quantity;

var discount ;

if ( total>5000){
discount = total * .20;

}

else if ( total>3000){

    discount = total * .10;
}


else{
    discount = 0 ;

}

// document.getElementById("result").innerText = "Your discount amount is: " + discount;

document.getElementById("result").innerHTML = `<h3>Your discount amount is: <span class = highlight> ${discount} </span> </h3>`


 }