
function connect() {


    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => display(data));


}

function display(data) {


    console.log(data);

    var prevContent = document.getElementById('outer-area');

    for (var a = 0; a < data.length; a++) {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = `<p> Title: ${data[a].name} </br>
        Email: ${ data[a].email } </br >
            ${ data[a].body } </p > `;


        newDiv.classList.add('inner-style');

        prevContent.appendChild(newDiv);

    }

}