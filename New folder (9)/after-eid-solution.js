function showfees() {

    var courses = parseInt(document.getElementById('totalCourses').value)
    var fees = parseInt(document.getElementById('feesPerCourse').value)
    var total = courses * fees
    var discount

    if (total > 50000) {

        discount = total * .20

    }

    else if (total > 25000) {

        discount = total * .10

    }

    else {

        discount = 0

    }
    var payable = total - discount
    document.getElementById('heading-style').style.visibility='visible'
    document.getElementById('show').innerText = "total payable tution fees: " + payable

}