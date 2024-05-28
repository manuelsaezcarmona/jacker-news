import './App.css';

import { TypeOfTop } from './services/api';

import { ListArticulos } from './components/ListaArticulos';

function App() {
  return (
    <main>
      <h1>JaaaCking News</h1>
      <ListArticulos typoDeTop={TypeOfTop.Top} pageSize={5} />
    </main>
  );
}

export default App;

/* Enlaces a styled Components
https://www.escuelafrontend.com/styled-components-en-react
https://dev.to/alfredocu/styled-components-basics-spanish-jdn
https://www.freecodecamp.org/news/styled-components-in-react/
https://styled-components.com/
https://dev.to/styrelius/styled-components-keyframes-animations-a-very-short-guide-44e3
https://dev.to/shubhamtiwari909/styled-componenets-react-js-15kk

*/
