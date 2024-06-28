import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentList from '../components/StudentList';
import AddStudentForm from '../components/AddStudentForm.jsx';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className='flex-auto'>
      <Navbar />
      <h1 className='bg-blue-400 font-extrabold flex-auto text-red-400 justify-center'>Student List</h1>
      <StudentList students={students} />
      <h2>Add New Student</h2>
      <AddStudentForm addStudent={addStudent} />
      <Footer />
    </div>
  );
};

export default Students;
