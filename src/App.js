import './App.css';
import Poke from './components/Poke';
import { useGetPokeQuery } from './services/pokeApi';

function App() {

  const { data, error, isLoading, isSuccess, isError } = useGetPokeQuery();

  return (
    <div className="App">
      <Poke/>
      <hr/>
      {isLoading && "Loading..."}
      {isError && error.message}
      {data ? data.map((user, i) => <h4 key={i}>{user.name}</h4>) : 'missing data'}
    </div>
  );
}

export default App;
