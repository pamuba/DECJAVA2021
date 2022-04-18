import './App.css';
import Greet from './components/Greet' 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Controlled from './components/Controlled';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import Refsdemo from './components/Refsdemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

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
        {/* <Controlled/> */}
        {/* <ParentComp/> */}
        {/* <Refsdemo/> */}
        <ErrorBoundary>
          <Hero heroName = "Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Joker"/>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
