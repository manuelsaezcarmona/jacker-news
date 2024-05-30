import { useEffect } from 'react';
import { fetchComments } from '../services/api';
import { SkeletonDetailHeader } from '../components/skeletons/SkeletonDetailHeader';
import { SkeletonListaComentarios } from '../components/skeletons/SkeleletonListaComentarios';

export function AboutPage() {
  useEffect(() => {
    const prueba = async () => {
      const loging = await fetchComments(40492515);
      console.log(loging);
      return loging;
    };
    prueba();
  }, []);

  return (
    <main>
      <h1>About page</h1>
      <SkeletonDetailHeader />
      <SkeletonListaComentarios />
    </main>
  );
}
