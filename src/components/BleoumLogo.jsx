import React from 'react';

const BleoumLogo = ({ height = 44, dark = false }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
      <img
        src="/bleoum-logo.jpg"
        alt="Bleoum Service"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          borderRadius: '6px'
        }}
      />
    </div>
  );
};

export default BleoumLogo;
