import logo1 from './Patch Artwork WHITE.png';
import logo2 from './EK Linear WHITE.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='header'>New website coming soon!</h1>
      <div className='logos'>
        <img
          src={logo1}
          className='logo1'
          style={{ width: '15vw', height: '15vw' }}
          alt='logo'
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src={logo2}
          className='logo2'
          style={{ width: '40vw', height: '20vw' }}
          alt='logo'
        />
      </div>
      <p className='text'>
        <div>
          For information on classes at our new location, please contact us at{' '}
          <a href='mailto:extremekarate1@gmail.com'>extremekarate1@gmail.com</a>
        </div>
      </p>
    </div>
  );
}

export default App;
