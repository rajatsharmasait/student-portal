'use client'

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      textAlign: 'center',
      borderTop: '1px solid #e7e7e7',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
    },
    p: {
      margin: '0',
      color: '#333',
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.p}>New Generation High School © 2024</p>
    </footer>
  );
};

export default Footer;
