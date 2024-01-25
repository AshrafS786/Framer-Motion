import './App.css';
import Box1 from './components/Box1/Box1';
import Box2 from './components/Box2/Box2';
import Box3 from './components/Box3/Box3';
import Box4 from './components/Box4/Box4';
import Box5 from './components/Box5/Box5';

function App() {
  return (
    <div className="App">
      <Box1 />   {/*Animate & Initial Props & Transition Prop*/}
      <Box2 />   {/*Animate on Events*/}
      <Box3 />   {/*Variants*/}
      <Box4 />   {/*keyframes*/}
      <Box5 />   {/*useAnimate Hook*/}
    </div>
  );
}

export default App;
