function doAvg() {
    var person = document.getElementById('name-box').value;

    var mark1 = parseFloat(document.getElementById('q1-box').value);
    var mark2 = parseFloat(document.getElementById('q2-box').value);
    var mark3 = parseFloat(document.getElementById('q3-box').value);

    var avg = (mark1 + mark2 + mark3)/3;
    //console.log (sum)

    var text = "hello "+ person +"sum of two quiz marks Avg: " + avg;
    document.getElementById('result').value = text;
   // console.log (text)

}