function link() {

    fetch("http://www.products.com/455")

        .then(res => res.json())
        .then(data => display(data))


}

function display(data) {

    var prevContent = document.getElementById(`search`)


    for (var a = 0; a < data.length; a++) {
        if (data[a].instock > 50) {


            var newDiv = document.createElement('div')
            newDiv.innerHTML = `<p> Item: ${data[a].item} </br>
    Price: ${data[a].price} </br >
    Color: ${data[a].color} </br > 
    Instock: ${data[a].instock} </br ></p > `

            prevContent.appendChild(newDiv)
        }

    }
}