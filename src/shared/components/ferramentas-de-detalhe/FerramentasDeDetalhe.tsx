import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps{
  textoBotaoNovo?: string;


  mostratBotaoNovo?: boolean;
  mostratBotaoVoltar?: boolean;
  mostratBotaoApagar?: boolean;
  mostratBotaoSalvar?: boolean;
  mostratBotaoSalvarEFechar?: boolean;
  

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
  
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostratBotaoNovo = true,
  mostratBotaoVoltar= true,
  mostratBotaoApagar= true,
  mostratBotaoSalvar= true,
  mostratBotaoSalvarEFechar= false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
  

}) => {
  const theme = useTheme();


  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostratBotaoSalvar &&(
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >Salvar</Button>
      )}

      {mostratBotaoSalvarEFechar &&(
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        >Salvar e voltar</Button>
      )}

      {mostratBotaoApagar && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >Apagar</Button>
      )}

      {mostratBotaoNovo &&(
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >{textoBotaoNovo}</Button>
      )}

      <Divider variant='middle' orientation='vertical'/>

      {mostratBotaoVoltar &&(
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >Voltar</Button>
      )}

    </Box>
  );
};
