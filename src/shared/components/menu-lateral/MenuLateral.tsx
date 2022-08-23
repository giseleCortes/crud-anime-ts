import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';


export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}            
              src="https://scontent.fudi1-1.fna.fbcdn.net/v/t31.18172-8/13679858_1776944882543875_7070473824316491223_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeERJrzpMqAZiCLlnfVnAjVv9PnqiquWrGj0-eqKq5asaOn4WvEDENQtYBEPGvcKs-E1cwZiu1lbqv_zUiqUqtq2&_nc_ohc=i6SPnsF-8l0AX9DI4gs&_nc_ht=scontent.fudi1-1.fna&oh=00_AT8aw7rRISb7VT5bTG0aeZX-T93EUAXUzoAM_hDmln5wCA&oe=63291F51" />
          </Box> 
        </Box>

        <Divider/>

        <Box flex={1}>
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <Icon> home </Icon>
              </ListItemIcon>
              <ListItemText primary="Pagina Inicial" />
            </ListItemButton>
          </List>      
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};