function doSum() {
    var person = document.getElementById('name-box').value;

    var mark1 = parseInt(document.getElementById('q1-box').value);
    var mark2 = parseInt(document.getElementById('q2-box').value);

    var sum = mark1 + mark2;
    //console.log (sum)

    var text = "hello "+ person +"sum of two quiz marks: " + sum;
    document.getElementById('result').value = text;
   // console.log (text)

}