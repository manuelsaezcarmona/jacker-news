import { useEffect } from 'react';
import './App.css';
import { Articulo } from './components/Articulo';
import { SkeletonArticulo } from './components/skeletons/SkeletonArticulo';
import { TypeOfTop, getAllItems } from './services/api';

// eslint-disable-next-line import/extensions
import { mockStories } from './services/mockStories';
import { createPagination } from './utils';

function App() {
  // Si no tenemos los articulos , haremos una lista de skeleton , cuanto tengamos
  // la data remplazaremos por la lista de articulos.

  /*  useEffect(() => {
    async function paver() {
      const algo = await getAllItems(TypeOfTop.best);
      console.log(algo);
    }
    paver();
  }, []); */
  console.log(createPagination(mockStories, 5));
  return (
    <main>
      <h1>JaaaCking News</h1>
      {/*   <SkeletonArticulo />
      <Articulo /> */}
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
