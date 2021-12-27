import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-appbar">
          <div>
            <img src={`../icon.png`} alt="icon" />
          </div>
          <div className='App-textBar'>
            <h5>AAF</h5>
            <p>Utama</p>
          </div>
        </div>
        <div className='App-navBar'>
          <span>
            <p>Features</p>
            <p>Workflow</p>
            <p>Pricing</p>
            <p>Reasources</p>
          </span>
        </div>
        <div className='App-authBar'>
          <span>
            <p>Sign Up</p>
            <button className='btn App-btnBlue'>Login</button>
          </span>
        </div>
      </header>
      <div className='App-positionAbs'>
        <p className='App-titleHeader'>#1 Communication platform</p>
        <h1>Communication With Everyone</h1>
        <p className='App-titleHeader'>Find new friends around you. Connections are very important to support your development.</p>
        <div>
          <button className='btn App-btnWhite'>Download for Mac</button>
          <button className='btn App-btnBlue'>Open Kumpulo in Browser</button>
        </div>
      </div>
      <img src={`../background.png`} className='App-bg' alt="bg-cover" />
    </div>
  );
}

export default App;
