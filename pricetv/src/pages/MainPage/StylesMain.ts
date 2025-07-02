import { styled } from '@mui/system';

export const Parent = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap:' 5px',
    gridRowGap: '5px',
    height: '97vh',
    padding: '7px'
}));

export const ImgGrid = styled('div')(() => ({
    gridArea: '1 / 1 / 3 / 2',
    padding: '3px'
    // border: '1px solid'
}));

export const GrafGrid = styled('div')(() => ({
    gridArea: '3 / 1 / 5 / 5',
    padding: '5px'
    // border: '1px solid'
}));

export const DescGrid = styled('div')(() => ({
    gridArea: '1 / 2 / 3 / 5',
    padding: '10px',
    // border: '1px solid'
}));

export const PrograqmGrid = styled('div')(() => ({
    gridArea: '5 / 1 / 6 / 5',
    border: '1px solid'
}));

export const ListItemGrid = styled('div')(() => ({
    gridArea: '1 / 5 / 6 / 7',
    // border: '1px solid',
    overflow: 'auto',
    height: 'inherit'
}));

export const TitleCategory = styled('span')(() => ({
  fontSize: '20px',
  textTransform: 'uppercase',
  fontWeight: 600,
  marginRight: '10px',
  color:"#00ffff"
}));

export const DescCategory = styled('span')(() => ({
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color:"#00ffff"
  }));

  export const CountryCategory = styled('span')(() => ({
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color:"#00ffff"
  }));

  export const ProductInfo = styled('span')(() => ({
    fontSize: '14px',
    fontWeight: 600,
  }));

  export const InfoDetails = styled('span')(() => ({
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color:"#00ffff"
  }));

  export const PriceTitle = styled('span')(() => ({
    fontSize: '14px',
    textTransform: 'initial',
    fontWeight: 600,
    marginRight: '10px',
    color:"#00ffff",
    marginBottom: '3px'
  }));

  export const PriceIncreaseDate = styled('span')(() => ({
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color:"#00ffff",
    marginBottom: '3px',
    display:'flex',
    width: '100%',
    alignItems:'center',
    justifyContent: 'center'
  }));

  export const Data = styled('span')(() => ({
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: 600,
    color:"white",
    marginLeft: '10px'
  }));

  export const TitleFooter = styled('div')(() => ({
    paddingBottom: '5px',
    fontSize: '16px',
    textTransform: 'initial',
    color:"#00ffff",
    fontWeight: 600,
    display: 'flex'
  }));

  export const TitleFooterFlag = styled('div')(() => ({
    display:'flex',
    height: '100%',
    alignItems: 'center',
    paddingBottom: '5px',
    fontSize: '24px',
    textTransform: 'initial',
    color:"#00ffff",
    fontWeight: 600,
    marginRight: '10px'
  }));

  export const IndicateBlockWraper = styled('div')(() => ({
    marginLeft: '10px', color: 'rgb(0, 255, 255)'
  }));

  export const IndicateBlockItem = styled('div')<{bg: string, animate: string | boolean, effect: string | boolean, isActive: boolean }>(({bg, animate, effect, isActive}) => ({
    width: '40px',
    height: '40px',
    backgroundColor: bg ,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    borderRadius: '45%',
    opacity: isActive ? '1': '0.3',
    [animate as string]: `0px 0px 10px 5px ${bg}`,
    [effect as string]: 'pulse 2s infinite',
    "@keyframes pulse":{
        "0%": {
            boxShadow: `0px 0px 10px 5px  #212121}`
          },
          "100%": {
            boxShadow: `0px 0px 10px 5px  ${bg}`
          }
        },
  }));