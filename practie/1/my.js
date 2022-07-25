function showdetails() {

    var name = document.getElementById('Name').value

    var courses = parseInt(document.getElementById('CoursesTaken').value)

    var fees = parseInt(document.getElementById('FeesPerCourse').value)

    var semester = parseInt(document.getElementById('CurrentSemesterNo').value)

    var total = courses * fees
    var discount

    if (total > 50000 && semester > 5) {

        discount = (total * .20)
        library = discount + 1000
    }

    else if (total > 25000 && semester > 3) {

        discount = (total * .10) 
        ibrary = discount + 800
    }

    else if (total > 10000 && semester > 2) {

        discount = (total * .05) 
        ibrary =discount + 500
    }

    else {

        discount = 0

    }

    var payable = total - discount

    document.getElementById('show').innerText = "total payable tution fees: " + name + payable

}