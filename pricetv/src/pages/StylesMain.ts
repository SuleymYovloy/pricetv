import { styled } from '@mui/system';

export const Parent = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: ' 5px',
    gridRowGap: '5px',
    height: '97vh',
    padding: '7px'
}));

export const ImgGrid = styled('div')(() => ({
    gridArea: '1 / 1 / 3 / 2',
    padding: '3px',
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
    height: '100%',
    overflow: 'auto'
    // border: '1px solid'
}));

export const ProgramGrid = styled('div')(() => ({
    gridArea: '5 / 1 / 6 / 5',
    padding: '10px',
    overflow: 'auto',
    // border: '1px solid'
}));

export const ListItemGrid = styled('div')(() => ({
    gridArea: '1 / 5 / 6 / 7',
    // border: '1px solid',
    overflow: 'auto',
    height: 'inherit',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}));

export const TitleCategory = styled('span')(() => ({
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color: "#3d4b93d9"
}));

export const DescCategory = styled('span')(() => ({
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color: "#3d4b93d9"
}));

export const CountryCategory = styled('span')(() => ({
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginRight: '10px',
    color: "#3d4b93d9"
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
    color: "#3d4b93d9"
}));

export const PriceTitle = styled('span')(() => ({
    fontSize: '14px',
    textTransform: 'initial',
    fontWeight: 600,
    marginRight: '10px',
    color: "#3d4b93d9",
    marginBottom: '3px'
}));


export const BoisterousStringWrap = styled('span')(() => ({
    display: 'flex',
    width: '100%',
    overflowX: 'hidden'
}));

export const BoisterousStringAnimate = styled('span')(() => ({
    "@keyframes text": {
        "0%": {
            transform: "translate(0, 0)"
        },
        "100%": {
          transform: "translate(-1600%, 0)"
        }
      },
      width: "100%",
      whiteSpace: 'nowrap',
      animation: "text 200s infinite linear",
      color: '#ff7575',
      marginLeft: '10px'
}));



