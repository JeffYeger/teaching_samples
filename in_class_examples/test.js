fetch('https://freetestapi.com/api/v1/students', {
  method: 'GET'
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); 
})

.then(data => {
    data.forEach(student => {
        const div = document.createElement('div');
        div.className = 'studentDiv'
        // Concatenate name and age into the text content of the div
        div.innerHTML = `Name: ${student.name} <br> Age: ${student.age} <br> Email: ${student.email}`;


        document.body.appendChild(div);
    });
    
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});


function addStudent () {
    // Get form field values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
  
    // Create a new div element to display student details
    const studentDetails = document.createElement('div');
    studentDetails.className = 'studentDiv'
    studentDetails.innerHTML = `Name: ${firstName} ${lastName} <br> Age: ${age} <br> Email: ${email}`;
    document.body.appendChild(studentDetails);

   
  

    document.getElementById('studentForm').reset()
    return false
  }

  

  function addToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

const students = [
    { id: 1, name: "John", age: 20, grade: "A" },
    { id: 2, name: "Jane", age: 21, grade: "B" },
    { id: 3, name: "Alice", age: 22, grade: "A" }
]

let string = JSON.stringify(students)
console.log(string);

let parse = JSON.parse(string)
console.log (parse)




  // .then(data => {
//     const ul = document.createElement('ul');
//     data.forEach(student => {
//         const li = document.createElement('li');
//         const detailsUl = document.createElement('ul');

//         // Create list items for each detail of the student
//         const nameLi = document.createElement('li');
//         nameLi.textContent = "Name: " + student.name;
//         detailsUl.appendChild(nameLi);

//         const ageLi = document.createElement('li');
//         ageLi.textContent = "Age: " + student.age;
//         detailsUl.appendChild(ageLi);

//         // Add additional details as needed

//         // Append the details ul to the student's li
//         li.appendChild(detailsUl);

//         // Append the student's li to the main ul
//         ul.appendChild(li);
//     });

//     // Append the main ul to the document body
//     document.body.appendChild(ul);
// })