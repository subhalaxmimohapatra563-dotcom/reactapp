// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [student, setCount] = useState({
//     name: "",
//     age: 0,
//     course: "",
//   });
  
//   const[students, setStudents] = useState([]);
//   const handleChange = (e) => {
//     setCount({
//       ...student,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const addStudent = () => {

//     if(student.name || !student.age || !student.course){
//       alert("Please fill all the fields");
//       return;
//     }
//     setStudent([...student, student]);
//     // 1. ...student, student(spread operator)
//     setStudent({
//       name: "LAXMI",
//       age: 21,
//       course: "MCA",
//     });
//   };
   


//   return (
//     <div>
//       {/* Header */}
//       <header className="header">
//         <h1>Student Management portal</h1>

//         <nav>
//           <a href="#">Home</a>
//           <a href="#">students</a>
//           <a href="#">Courses</a>
//           <a href="#">contact</a>
//         </nav>
//       </header>
//      {/* Hero Section */}
//       <section className="hero">
//         <h2>Welcome to the Student Portal</h2>
//         <p>Manage your student records easily using react</p>
//       </section>
//       {/* cards */}
//       <section className="cards">
//         <div className="card">
//           <h3>Student </h3>
//           <p>total student records managed in one place.</p>
//         </div>
//         <div className="card">
//           <h3>Courses</h3>
//           <p>Track enrolled courses and batches.</p>
//         </div>
//         <div className="card">
//           <h3>Reports</h3>
//           <p>Generate reports and monitor progress.</p>
//         </div>
//       </section>
//      <section className ="form-container">
//       <h2>Add Student</h2>
//       <input type="text"name="name"placeholder="Student Name" value={student.name} onChange={handleChange}></input>
//       <input type="number"name="age"placeholder="Age" value={student.age} onChange={handleChange}></input>
//       <input type="text"name="course"placeholder="course" value={student.course} onChange={handleChange}></input>
//       <button onClick={addStudent}>Add Student</button>
//      </section>
//      <section className="table-container">
//       <h2>Student Record</h2>
//       {student.length===0 ?(
//         <p>No students added yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Course</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((stu,index)=>(
//               <tr key={index}>
//                 <td>{stu.name}</td>
//                 <td>{stu.age}</td>
//                 <td>{stu.course}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//      </section>

//      <section className="links">
//       <h2> Learning Resources</h2>
//       <a
//       href='https://react.dev'
//       target="_blank"
//       rel='noreferrer'
//       >
//         React Documentation
//       </a>

//       <a
//       href='https://developer.mozille.org'
//       target="_blank"
//       rel='noreferrer'
//       >
//         MDN Web Docs
//       </a>
//       <a
//       href='https://react.dev'
//       target="_blank"
//       rel='noreferrer'
//       >
//         Vite Documentation
//       </a>
//      </section>
//      <footer className="footer">
//       <p> 2026 Student Management Portal | Built with React</p>
//      </footer>
//      </div>
//   );
// }
// export default App;

// import React, { useState } from 'react';

// const StudentManager = () => {
//   // State for the list of students
//   const [students, setStudents] = useState([]);
  
//   // State for the form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     course: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddStudent = (e) => {
//     e.preventDefault();
//     if (formData.name && formData.age && formData.course) {
//       // Add new student to the records array
//       setStudents([...students, { ...formData, id: Date.now() }]);
      
//       // Clear form
//       setFormData({ name: '', age: '', course: '' });
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Add Student</h2>
//       <form onSubmit={handleAddStudent}>
//         <div>
//           <label>Student Name: </label>
//           <input name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Age: </label>
//           <input name="age" type="number" value={formData.age} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Course: </label>
//           <input name="course" value={formData.course} onChange={handleChange} />
//         </div>
//         <button type="submit">Add Student</button>
//       </form>

//       <h3>Student Records</h3>
//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             {student.name} - {student.age} - {student.course}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentManager;

import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  const [students, setStudents] = useState([]);

  // handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // add student
  const addStudent = () => {
    if (!student.name || !student.age || !student.course) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, student]);

    setStudent({
      name: "",
      age: "",
      course: ""
    });
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={student.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student Records</h2>

      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;