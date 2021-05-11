import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment,incrementByAmount } from './redux/counter';


function App() {

// initalstate name we will use, Similar to mapStateToProps - use newstate=>state.nameofreducer
const {value}=useSelector(state=>state.counter);

//both two lines are sames
//initalstate name we will use, Similar to mapStateToProps - use newstate=>state.nameofreducer.initialstate key
//const value=useSelector(state=>state.counter.value);

//Now value is coming but we need to bind actions with buttons with help of dispatcher and using dispacter we call call action of reducer

const dispatch=useDispatch();
  return (
    <div className="App">
      <h1> The count is: {value} </h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())} >decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default App;
