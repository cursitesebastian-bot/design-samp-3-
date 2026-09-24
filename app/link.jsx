function Route(){
  return (
    <header style={{
      background: '#818675',
      color: 'black',
      padding: '0 10px',
      textAlign: 'center',
      marginBottom: '0px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h2>SUJAK/</h2>
      <nav style={{ 
        color: 'black',
        padding: '25px',
        textAlign: 'center',
        marginBottom: '0px',
        borderRadius: '20px',
        }}>
        <a href="#" style={{ color: 'black', marginRight: '20px', textDecoration: 'none', }}>HOME</a>
        <a href="#" style={{ color: 'black', marginRight: '20px', textDecoration: 'none', }}>ABOUT</a>
        <a href="#" style={{ color: 'black', textDecoration: 'none', }}>CONTACT</a>
      </nav>
    </header>
  );
}

export default Route