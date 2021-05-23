import React from 'react';

const City = ({
  city
}) => {
  const styles = {
    controls: {
      padding: '15px',
      marginBottom: '25px'
    }
  };

  return(
    <div style={styles.controls}>
      {city}
    </div>
  );
}

export default City;