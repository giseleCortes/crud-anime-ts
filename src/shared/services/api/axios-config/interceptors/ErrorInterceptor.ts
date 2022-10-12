import { AxiosError } from 'axios';


export const errorInterceptor = (error: AxiosError) => {

  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Veririque sua conexão com a internet.'));
  }

  if (error.response?.status === 401){
    //return Promise.reject(new Error('Erro de autenticação.')); e direcionar o tratamento esse é apenas um exemplo
  }

  return Promise.reject(error);
};