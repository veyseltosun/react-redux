import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './redux/reducer';
import initialState from './redux/store';

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>

    <div className="App" >
      <h1>Clarus Test </h1> 
      <h2>Redux ile state manegement!</h2>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
      
    </div>
    </Provider>
  );
}

export default App;
