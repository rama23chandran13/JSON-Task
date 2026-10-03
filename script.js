var students = [];

document.getElementById("studentForm").onsubmit = function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var department = document.getElementById("department").value;
    var marks = document.getElementById("marks").value;
    var city = document.getElementById("city").value;

    var student = {
        name: name,
        age: age,
        department: department,
        marks: marks,
        city: city
    };

    students.push(student);

    showStudents();

    document.getElementById("studentForm").reset();
};


function showStudents() {

    var studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    for (var i = 0; i < students.length; i++) {

        var student = students[i];

        var div = document.createElement("div");

        div.className = "student";

        div.innerHTML =
            "<b>Name:</b> " + student.name + "<br>" +
            "<b>Age:</b> " + student.age + "<br>" +
            "<b>Department:</b> " + student.department + "<br>" +
            "<b>Marks:</b> " + student.marks + "<br>" +
            "<b>City:</b> " + student.city;

        studentList.appendChild(div);
    }

    document.getElementById("jsonData").textContent =
        JSON.stringify(students, null, 4);
}
