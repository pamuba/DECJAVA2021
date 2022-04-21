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
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext'
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
// import PostForm from './components/PostForm';

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
        {/* <ErrorBoundary>
          <Hero heroName = "Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName = "Joker"/>
        </ErrorBoundary> */}

        {/* <ClickCounter/>
        <HoverCounter/> */}
        {/* <UserProvider value="John">
         <ComponentC />
        </UserProvider> */}

        {/* <PostList/> */}
        {/* <PostForm /> */}

        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}

        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <HookMouse/> */}
        <MouseContainer/>
      </header>
    </div>
  );
}

export default App;
