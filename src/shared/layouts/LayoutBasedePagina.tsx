import { Box } from '@mui/system';
import { IconButton, Icon, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';


interface ILayoutBasedePaginaProps {
  children: ReactNode;
  titulo: string;





}
export const LayoutBasedePagina: React.FC<ILayoutBasedePaginaProps> = ({ children, titulo }) => {
  const theme = useTheme();

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}> 
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
        <IconButton>
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant = 'h5'>
          {titulo}    
        </Typography>
        
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