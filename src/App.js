import './App.css';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Help from './components/Help';
import Secondcomponent from './components/Secondcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react js</h1>
        <h2>React is Fun</h2>

      </header>
      {/* Below we render/display/show our components */}
        <Firstcomponent/>
        <Secondcomponent/>
        <Contactus/>
        <Help/>
    </div>
  );
}

export default App;

// jsx
// Create two other components i.e Contactus and Help components and style them with your own content. Render them on App.js component

// App.js is our root component.