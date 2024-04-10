// App.js
import './App.css';
import useFetch from './useFetch';
import { useCounter } from './useCounter';
import Card from './Card';
function App() {
  const { counter, setCounter, increment, discrement } = useCounter(10); // Inicializa el contador en 1

  // Genera la URL de la API utilizando el valor actual del contador
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  const { data, isLoading, hasError } = useFetch(urlApi);

  return (
    <>
     <Card counter = {counter} increment = {increment} discrement = {discrement} data = {data} isLoading = {isLoading} hasError = {hasError} setCounter={setCounter} />
    </>
  );
}

export default App;
