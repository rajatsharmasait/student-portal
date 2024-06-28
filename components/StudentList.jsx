'use client'

const StudentList = ({ students }) => {
  const styles = {
    ul: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      backgroundColor: '#f8f9fa',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto',
      padding: '10px'
    },
    li: {
      padding: '10px',
      borderBottom: '1px solid #ccc',
      margin: '5px 0'
    },
    lastLi: {
      padding: '10px',
      margin: '5px 0'
    }
  };

  return (
    <ul style={styles.ul}>
      {students.map((student, index) => (
        <li
          key={index}
          style={index === students.length - 1 ? styles.lastLi : styles.li}
        >
          {student.firstName} {student.lastName}, DOB: {student.dob}, Grade: {student.grade}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
