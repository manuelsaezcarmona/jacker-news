import { useEffect } from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { Articulo } from './components/Articulo';
import { SkeletonArticulo } from './components/skeletons/SkeletonArticulo';
import { TypeOfTop, getAllItems, getTopIds } from './services/api';

// eslint-disable-next-line import/extensions
import { mockStories } from './services/mockStories';
import { createPagination } from './utils';

function App() {
  const query = useQuery({
    queryKey: ['ids'],
    // eslint-disable-next-line @typescript-eslint/return-await
    queryFn: async () => await getTopIds(TypeOfTop.Best),
  });

  console.log(query);

  return (
    <main>
      <h1>JaaaCking News</h1>
      <SkeletonArticulo />
      <Articulo />
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
