
// getting the elements

var list = document.getElementById("list")
var output = document.getElementById("output")


let classroom = [
    {
        name : "herry",
        marks : "42 / 50",
        Grade : "A"
    },
    {
        name : "john",
        marks : "45 / 50",
        Grade : "A"
    },
    {
        name : "zeyn",
        marks : "47 / 50",
        Grade : "A+"
    },
    {
        name : "Hanna",
        marks : "45 / 50",
        Grade : "A"
    },
    {
        name : "ella",
        marks : "44 / 50",
        Grade : "A"
    },
    {
        name : "erik",
        marks : "48 / 50",
        Grade : "A+"
    }
]

classroom.forEach(student => {
   list.innerHTML += `<li class="listItem"> ${student.name} </li>`
    var listItems = document.querySelectorAll(".listItem")
    listItems.forEach((listItem, index) => {
        listItem.addEventListener("click", function () {
            output.textContent = classroom[index].name + " 's marks are " + classroom[index].marks + " and Grades are " + classroom[index].Grade;
        });
    });
});



