fetch('https://jsonplaceholder.typicode.com/users')
   
.then(res => res.json())

// .then(data => console.log(data)  );

    .then(data => process(data));



function process(data) {

    for (var a = 0; a < data.length; a++) {

        Console.log("Name: " + data[a].name + "Email: " + data[a].email);

    }


};