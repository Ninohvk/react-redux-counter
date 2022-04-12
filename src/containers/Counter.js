import { connect } from "react-redux";
import { Counter } from "../components/Counter";

/* Indica que queremos recuperar del estado para que se pase como props al componente que conectamos */
const mapStateToProps = (state) => {
  return { counter: state.counter };
  // { nombre_prop: valor_prop }
};

// indicamos que acciones queremos enviar al componente como prop
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

const createConnection = connect(mapStateToProps, mapDispatchToProps);

const ComponentWithConnectionToRedux = createConnection(Counter);

//Lo que exportamos aqui es el contenedor, el que realiza la conexion con redux
export default ComponentWithConnectionToRedux;
