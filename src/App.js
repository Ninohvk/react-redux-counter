import "./App.css";
import CounterContainer from "./containers/Counter";
import { counterReducer } from "./reducers/counterReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore(counterReducer);
  return (
    <div className="App">
      <Provider store={store}>
        {/* En lugar de renderear counter directamente, rendereamos en contenedor que hace la conexion con redux,
        desde ahi el contenedor conoce que componente de react llamar */}
        <CounterContainer />
      </Provider>
    </div>
  );
}

export default App;
