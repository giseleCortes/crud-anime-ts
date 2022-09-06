import { Box } from '@mui/system';
import { ReactNode } from 'react';


interface ILayoutBasedePaginaProps {
  children: ReactNode;
  titulo: string;





}
export const LayoutBasedePagina: React.FC<ILayoutBasedePaginaProps> = ({ children, titulo }) => {


  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}> 
      <Box >
        {titulo} 
      </Box>
      <Box >
        Barra de Ferramentas
      </Box>  
      <Box >
        {children} 
      </Box>  

           
    </Box>
  );
};