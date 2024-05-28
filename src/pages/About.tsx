import { useEffect } from 'react';
import { fetchComments, gatherInformation, getAllCommentsByID } from '../services/api';

export function AboutPage() {
  useEffect(() => {
    const prueba = async () => {
      const loging = await fetchComments(40492515);
      console.log(loging);
      return loging;
    };
    prueba();
  }, []);

  return <h1>About page</h1>;
}
