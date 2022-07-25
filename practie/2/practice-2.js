function showresults() {

    var name = document.getElementById('Name').value

    var marks = parseInt(document.getElementById('TotalMark').value)
    var grade = ""

    // var fees = parseInt(document.getElementById('FeesPerCourse').value)

    // var semester = parseInt(document.getElementById('CurrentSemesterNo').value)

    // var total = marks
    // var discount

    if (marks > = 90 % ) {

        grade = 4.00

    }

    else if (marks > = 85 % && marks <= 90 %) {

        grade = 3.70


    }

    else if (marks > = 80 % && marks <= 85 %) {

        grade = 3.30


    }
    else if (marks > = 75 % && marks <= 80 %) {

        grade = 3.00


    }
    else if (marks > = 70 % && marks <= 75 %) {

        grade = 2.70


    }

    else if (marks > = 65 % && marks <= 70 %) {

        grade = 2.30


    }

    else if (marks > = 60 % && marks <= 65 %) {

        grade = 2.00


    }
    else if (marks > = 55 % && marks <= 60 %) {

        grade = 1.70


    }
    else if (marks > = 50 % && marks <= 55 %) {

        grade = 1.30


    }
    else if (marks <= 50 %) {

        grade = 1.00


    }

    else {

        grade = 0



    }


    document.getElementById('show').innerText = "final result: " + name + grade

}



