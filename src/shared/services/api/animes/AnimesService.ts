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


const getAll = async (page = 1, filter= ''): Promise<any> => {
  try{
    const urlRelativa = `/animes?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHAS}&tituloDoAnime_like=${filter}`;

    const {data} = await Api.get(urlRelativa);  

  } catch(error){

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
