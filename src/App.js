import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  ClassComp from "./Components/ClassComponent"
import  FunctionalComp from "./Components/FunctionalComponent"
import Click from "./Components/Click"
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
 <div>
   <h1> This is SimpliOne</h1>
   <ClassComp/>
   <FunctionalComp/>
   <Click/>
   <Counter/>
   <ParentComp/>

   </div>
  );
}

export default App;
