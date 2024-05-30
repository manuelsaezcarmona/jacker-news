import './App.css';

import { TypeOfTop } from './services/api';

import { ListArticulos } from './components/ListaArticulos';

function App() {
  return (
    <main>
      <h1>JaaaCking News que me las quitan de las maaanooooosss 💃💃</h1>
      <ListArticulos typoDeTop={TypeOfTop.Top} pageSize={5} />
    </main>
  );
}

export default App;
