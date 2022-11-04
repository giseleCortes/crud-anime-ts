import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListagemDeAnimes } from '../pages';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label:'Página inicial',
        path: '/paginal-inicial',
      },
      {
        icon: 'catching-pokemon-sharp',
        label:'Animes',
        path: '/animes',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/animes" element={<ListagemDeAnimes />} />
      {/* <Route path="/generos/detalhe/:id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};