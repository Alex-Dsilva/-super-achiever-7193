const Overlay = ({ show }) => {
    return show ? (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99
      }}>
      </div>
    ) : null
  };

  export default Overlay