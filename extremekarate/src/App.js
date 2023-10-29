import logo1 from './Patch Artwork-1.png';
import logo2 from './EK Linear-1.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h2>New website coming soon!</h2>
      <div className='logos'>
        <img
          src={logo1}
          className='logo1'
          style={{ width: '45vw', height: '35vw' }}
          alt='logo'
        />
        <img
          src={logo2}
          className='logo2'
          style={{ width: '50vw', height: '30vw' }}
          alt='logo'
        />
      </div>
      <header className='App-header'>
        <div>
          For information on classes at our new location, please contact us at{' '}
          <a href='mailto:extremekarate1@gmail.com'>extremekarate1@gmail.com</a>
        </div>
      </header>
    </div>
  );
}

export default App;
