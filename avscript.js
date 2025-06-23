function  availablecourse(){
    fetch("http://localhost:8080/course")
    .then((Response)=>Response.json())
    .then((data)=>{
        const dataTable=document.getElementById("courses");
        data.forEach(course => {
             var row = `<tr>
            <td>${course.courseid}</td>
            <td>${course.coursename}</td>
            <td>${course.durationinweeks}</td>
            <td>${course.trainer}</td>
            </tr>`
            dataTable.innerHTML+=row;
            
        });

    });
}

function  enrolledstudents(){
    fetch("http://localhost:8080/course/entrolled")
    .then((Response)=>Response.json())
    .then((data)=>{
        const dataT=document.getElementById("coursereg");
        data.forEach(student => {
             var row = `<tr>
           
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.coursename}</td>
            </tr>`
            dataT.innerHTML+=row;
            
        });

    });
}

