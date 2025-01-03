let students = [
    { stdname: "Paras",
        subjects: [{
            subject : "maths",
            marks : 45,
        }, 
        {
            subject : "Urdu",
            marks : 45,
        }]
    },
    { stdname: "namra",
        subjects: [{
            subject : "maths",
            marks : 49,
        }, 
        {
            subject : "Urdu",
            marks : 40,
        }]
    },
];

const arr = []
students.forEach(element => {
  console.log(element.stdname);
    element.subjects.forEach(ele => {
        console.log(ele.subject, ele.marks)
    });
});