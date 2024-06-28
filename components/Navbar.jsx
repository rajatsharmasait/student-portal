'use client'
import Link from 'next/link';

const Navbar = () => {
  const styles = {
    nav: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      borderBottom: '1px solid #e7e7e7',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0',
      margin: '0',
    },
    li: {
      margin: '0 10px',
    },
    a: {
      textDecoration: 'none',
      color: '#0070f3',
      fontSize: '16px',
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link href="/" passHref style={styles.a}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link href="/students" passHref style={styles.a}>Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
