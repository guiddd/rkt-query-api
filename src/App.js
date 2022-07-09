import './App.css';
import Form from './components/Form';
import { useGetUsersQuery } from './services/pokeApi';

function App() {

  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();

  return (
    <div className="App">
      <h1>Get users firestore</h1>
      <hr/>
      {isLoading && "Loading..."}
      {isError && error.message}
      {data ? data.map(item=>(
                <p key={item.id}>El nombre del usuario es <b>{item.name}</b>, tiene <b>{item.age}</b> años y se encarga de <b>{item.job}</b></p>)) 
                : 'missing data'}
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
