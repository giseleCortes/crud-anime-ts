import { Enviroment } from '../../../enviroment';
import { Api } from '../axios-config';

interface IListagemAnimes {
  id: number;
  tituloDoAnime: string;
  episodio: number;
  generoId: number;
}
interface IDetalheAnimes {
  id: number;
  tituloDoAnime: string;
  episodio: number;
  generoId: number;
}

type TAnimesComTotalCount = {
  data: IListagemAnimes[];
  totalCount: number;

};


const getAll = async (page = 1, filter= ''): Promise<TAnimesComTotalCount | Error> => {
  try{
    const urlRelativa = `/animes?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHAS}&tituloDoAnime_like=${filter}`;

    const {data, headers} = await Api.get(urlRelativa);
    
    if(data) {
      return{
        data,
        totalCount: Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar aos registros.');

  } catch(error){

    console.error(error);
    return new Error((error as {message:string}). message ||'Erro ao listar aos registros.');
  }
    
};

const getById = async (id: number): Promise<IDetalheAnimes | Error> => {
  try{
    const {data} = await Api.get(`/animes/${id}`);
    
    if(data) {
      return data;

    }
    

    return new Error('Erro ao consultar o registro.');

  } catch(error){

    console.error(error);
    return new Error((error as {message:string}). message ||'Erro ao consultar o registro.');
  }
};

const create= async (dados: Omit<IDetalheAnimes, 'id'>): Promise<number | Error> => {
  try{
    const {data} = await Api.post<IDetalheAnimes>('/animes', dados);
    
    if(data) {
      return data.id;
    }
    

    return new Error('Erro ao criar o registro.');

  } catch(error){

    console.error(error);
    return new Error((error as {message:string}). message ||'Erro ao criar o registro.');
  }
};

const updateById= async (id: number, dados: IDetalheAnimes): Promise<void | Error> => {
  try{
    await Api.put(`/animes/${id}`, dados);
  } catch(error){

    console.error(error);
    return new Error((error as {message:string}). message ||'Erro ao atualizar o registro.');
  }
};

const deleteById= async (id: number): Promise<void | Error> => {
  try{
    await Api.delete(`/animes/${id}`);
  } catch(error){

    console.error(error);
    return new Error((error as {message:string}). message ||'Erro ao apagar o registro.');
  }
};


export const AnimesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,

};
