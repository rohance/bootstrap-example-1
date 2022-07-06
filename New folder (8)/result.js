//PASS-FAIL

// var studentInput = parseInt(document.getElementById("entry").value);

// if(studentInput >= 60) {

//     document.getElementById("display").innerText = "PASS";
    
// }

// else {

// document.getElementById("display").innerText ='FAIL';

// }

//RESULT A,B,C
 
// var stumarks = parseInt(document.getElementById("entry").value);


// if (stumarks >= 80){

// document.getElementById('display').innerText = "A";

// }

// else if (stumarks >=70){

//     document.getElementById('display').innerText = "B";

// }

// else if (stumarks >=60){

//     document.getElementById('display').innerText = "C";

// }

// else {

// document.getElementById('display').innerText = "F"; 
// }


//var msg

// var stumarks = parseInt(document.getElementById("entry").value);

// var msg = " ";

// if (stumarks >= 80){

// msg = "A";

// }

// else if (stumarks >=70){

//     msg = "B";

// }

// else if (stumarks >=60){

//     msg = "C";

// }

// else {

//     msg = "F"; 
// }

// document.getElementById('display').innerText = "Your grade is : " + msg;


//price

var up = parseInt(document.getElementById('unitPrice').value);
var quantity = parseInt(document.getElementById('q').value)
var total = up * total;
var discount;

if ( total>5000){
    discount = total*0.2;
}
else if ( total>3000){
    discount = total*0.1;
}

else{

    discount = total;
}

document.getElementById('result').innerText = discount;