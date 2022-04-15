import './App.css';
import Greet from './components/Greet' 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Controlled from './components/Controlled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Bruce" heroName="Batman"> */}
          {/* <button>Click</button>
          <p>This is the child tag</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
         
        </Greet>
        <Greet name="Diana"heroName="Woner Woman"/> */}
        {/* <Welcome name="Bruce"/> */}
        {/* <Hello/> */}
        {/* <Counter /> */}
        {/* <EventBind/> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        <Controlled/>
      </header>
    </div>
  );
}

export default App;
