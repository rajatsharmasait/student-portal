'use client'
import { useState } from 'react';

const AddStudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '400px',
      margin: 'auto'
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#0070f3',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px'
    },
    buttonHover: {
      backgroundColor: '#005bb5'
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        style={styles.input}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        style={styles.input}
        placeholder="Last Name"
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="text"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        style={styles.input}
        placeholder="Grade"
        required
      />
      <button type="submit" style={styles.button}>Add Student</button>
    </form>
  );
};

export default AddStudentForm;
