function api() {
    var searchText = document.getElementById("search").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));

}

function display(data) {


    
    var oldContent = document.getElementById("container")
    for (var a = 0; a < data.meals.length; a++) {

        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
     <div class="card" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
      <p class="card-text">
      <h4>cooking instructions:</h4>
      ${data.meals[a].strInstructions}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> ` ;

        oldContent.appendChild(newDiv);

    }

}


//result you want to see


// function display(data) {
//     var oldContent = document.getElementById("container");
//     var number = parseInt(document.getElementById("items").value);
//     document.getEleuentById("search").value - " ";
//     document.getElenentById("items").value - " ";
//     document.getElementById("container").textContent = " "
// }