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

const getById = async (): Promise<any> => {};

const create= async (): Promise<any> => {};

const updateById= async (): Promise<any> => {};

const deleteById= async (): Promise<any> => {};


export const AnimesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,

};
