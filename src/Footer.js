import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Ali Osman Ünaldı. All rights reserved.</p>
      <p style={styles.text}>
        Bu içerik, Ali Osman Ünaldı'nın izni olmadan kopyalanamaz veya yeniden yayınlanamaz.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '12px',
  }
};

export default Footer;
