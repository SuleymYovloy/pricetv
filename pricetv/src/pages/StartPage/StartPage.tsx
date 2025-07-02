import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Loading } from '../../components/Loading/Loading';
import { useAppSelector } from '../../hooks/redux';
import { CardCountrie } from './components/CardCountrie';


const StatsContainer = styled('div')({
  boxSizing: 'border-box',
  backgroundColor: '#262b31',
  borderRadius: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  maxWidth: 'min-content',
  overflow: 'hidden'
});

const Stat = styled('div')({
  backgroundColor: '#2b3036',
  margin: '10px',
  textAlign: 'center',
  flexBasis: '150px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontSize: 'calc(.4rem + 1vw)',
  flexGrow: '1',
  maxWidth: 'min-content',
  fontFamily: 'Copperplate Gothic Light'
});

const StatValue = styled('div')({
  color: '#ddd',
  padding: '0px 10px'
});

const StatLabel = styled('div')({
  marginTop: '5px',
  color: '#ddd',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  backgroundColor: '#3e383a',
  borderRadius: '3px',
  padding: '0px 10px'
});


export const StartPage = () => {
  const { isLoading, countries } = useAppSelector((state) => state.getCountriesSlice);

  if (isLoading) return <Loading />;
  return (
    <>
    <StatsContainer>
        <Stat>
          <StatValue>15</StatValue>
          <StatLabel>COUNTRIES</StatLabel>
        </Stat>
        <Stat>
          <StatValue>1,631,762</StatValue>
          <StatLabel>ITEMS</StatLabel>
        </Stat>
        <Stat>
          <StatValue>104,343,744</StatValue>
          <StatLabel>PRICES</StatLabel>
        </Stat>
        <Stat>
          <StatValue>40</StatValue>
          <StatLabel>STORES</StatLabel>
        </Stat>
      </StatsContainer>
      <Wrapper>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {countries?.map((countrie, index) => {
            console.log('🚀 =====> countrie:', countrie);
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <CardCountrie {...countrie} />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '4px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  padding: '16px',
  textAlign: 'center',
  justifyContent: 'space-around',
  WebkitBoxAlign: 'center',
  flexBasis: '30%',
  marginTop: '10%',
  marginBlockEnd: '10%',
  backgroundColor: '#262b31',
  color: '#ddd'
}));

const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  boxSizing: 'border-box',
  backgroundColor: '#262b31',
  borderRadius: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
  flexWrap: 'wrap',
  height: 'inherit'
}));
