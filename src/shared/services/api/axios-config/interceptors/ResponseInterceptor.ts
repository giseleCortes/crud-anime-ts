import { AxiosResponse } from 'axios';


export const responseInterceptor = (response: AxiosResponse) => {
  return response; // não tem função só um exemplo para um tratamento futuro
};