import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { useDebounce } from '../../shared/hooks/UseDebounce';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { AnimesService } from '../../shared/services/api/animes/AnimesService';


export const ListagemDeAnimes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const {debounce} = useDebounce(3000, false);

  const busca = useMemo(() =>{
    return searchParams.get('busca') || '';
  },[searchParams]);


  useEffect(() => {

    debounce(() => {
      AnimesService.getAll(1, busca)
        .then((result)=> {
          if (result instanceof Error){
            alert(result.message);
          } else {
            console.log(result);
          }

        });
    });
    
  }, [busca]);
    
  return(
    <LayoutBaseDePagina
      titulo='Lista de Animes'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo='Novo Anime'
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}

        />
      }
    >

    </LayoutBaseDePagina>
  );
};