import React from 'react';
import './Legend.css'; // Optional: If you prefer to use external CSS

const Legend = () => {
  const styles = {
    legend: {
      marginTop: '16px',
    },
    colorBox: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      marginRight: '10px',
      verticalAlign: 'middle',
      color:'white'
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      color: 'white', 
    },
  };

  return (
    <div style={styles.legend}>
      <ul>
      <li style={styles.listItem}>
          <b>States:-</b>
        </li>
        <li style={styles.listItem}>
          <div style={{ ...styles.colorBox, backgroundColor: 'green' }}></div>
          Current
        </li>
        <li style={styles.listItem}>
          <div style={{ ...styles.colorBox, backgroundColor: '#df6f3f' }}></div>
          Sensor
        </li>
        <li style={styles.listItem}>
          <div style={{ ...styles.colorBox, backgroundColor: '#4fb813' }}></div>
          Next
        </li>
        <li style={styles.listItem}>
          <div style={{ ...styles.colorBox, backgroundColor: 'grey' }}></div>
          Action
        </li>
        <li style={styles.listItem}>
          <div style={{ ...styles.colorBox, backgroundColor: 'red' }}></div>
          Stop
        </li>
      </ul>
    </div>
  );
};

export default Legend;
