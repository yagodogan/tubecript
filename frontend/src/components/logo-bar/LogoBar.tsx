import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="card shadow-2" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',     
        }}>
            <img src={logo} style={{ width: '10rem' }} alt="Logo" />
            <h1>TranscripTube</h1>
        </div>
    );
};

export default Navbar;