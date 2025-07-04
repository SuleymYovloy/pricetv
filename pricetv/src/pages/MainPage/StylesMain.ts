import { styled } from "@mui/system";

export const Parent = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gridColumnGap: "15px",
    gridRowGap: "15px",
    height: "97vh",
    padding: "20px",
    backgroundColor: "var(--bg-dark)",
    color: "var(--text-primary)",

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        height: "auto",
        padding: "15px",
    },

    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
        height: "auto",
        padding: "10px",
    },
}));

export const ImgGrid = styled("div")(({ theme }) => ({
    gridArea: "1 / 1 / 3 / 2",
    padding: "10px",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "8px",
    boxShadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
        gridArea: "auto",
        height: "250px",
    },

    [theme.breakpoints.down("sm")]: {
        gridArea: "auto",
        height: "200px",
    },
}));

export const DescGrid = styled("div")(({ theme }) => ({
    gridArea: "1 / 2 / 3 / 5",
    padding: "20px",
    height: "100%",
    overflow: "auto",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "8px",
    boxShadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
    color: "var(--text-primary)",
    fontFamily: "var(--main-font)",
    fontSize: "1rem",
    lineHeight: "1.6",
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-track": {
        background: "var(--bg-dark)",
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "var(--accent-green)",
        borderRadius: "10px",
        border: "2px solid var(--bg-dark)",
    },

    [theme.breakpoints.down("md")]: {
        gridArea: "auto",
        height: "auto",
    },

    [theme.breakpoints.down("sm")]: {
        gridArea: "auto",
        height: "auto",
    },
}));

export const GrafGrid = styled("div")(({ theme }) => ({
    gridArea: "3 / 1 / 5 / 5",
    padding: "20px",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "8px",
    boxShadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
        gridArea: "auto",
        height: "350px",
    },

    [theme.breakpoints.down("sm")]: {
        gridArea: "auto",
        height: "300px",
    },
}));

export const ProgramGrid = styled("div")(({ theme }) => ({
    gridArea: "5 / 1 / 6 / 5",
    padding: "20px",
    overflow: "auto",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "8px",
    boxShadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
    color: "var(--text-primary)",
    fontFamily: "var(--main-font)",
    fontSize: "1rem",
    lineHeight: "1.6",
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-track": {
        background: "var(--bg-dark)",
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "var(--accent-green)",
        borderRadius: "10px",
        border: "2px solid var(--bg-dark)",
    },

    [theme.breakpoints.down("md")]: {
        gridArea: "auto",
        height: "auto",
    },

    [theme.breakpoints.down("sm")]: {
        gridArea: "auto",
        height: "auto",
    },
}));

export const ListItemGrid = styled("div")(({ theme }) => ({
    gridArea: "1 / 5 / 6 / 7",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "8px",
    boxShadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
    overflowY: "auto",
    height: "inherit",
    padding: "15px",
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-track": {
        background: "var(--bg-dark)",
        borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "var(--accent-green)",
        borderRadius: "10px",
        border: "2px solid var(--bg-dark)",
    },

    [theme.breakpoints.down("md")]: {
        gridArea: "auto",
        height: "auto",
    },

    [theme.breakpoints.down("sm")]: {
        gridArea: "auto",
        height: "auto",
    },
}));

export const TitleFooter = styled("div")(() => ({
    paddingBottom: "5px",
    fontSize: "16px",
    textTransform: "initial",
    color: "#00ffff",
    fontWeight: 600,
    display: "flex",
}));

export const TitleFooterFlag = styled("div")(() => ({
    display: "flex",
    height: "100%",
    alignItems: "center",
    paddingBottom: "5px",
    fontSize: "24px",
    textTransform: "initial",
    color: "#00ffff",
    fontWeight: 600,
    marginRight: "10px",
}));

export const TitleCategory = styled("span")(() => ({
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: 700,
    marginRight: "15px",
    color: "var(--accent-green)",
    fontFamily: "var(--header-font)",
}));

export const DescCategory = styled("span")(() => ({
    fontSize: "18px",
    textTransform: "initial",
    fontWeight: 400,
    marginRight: "10px",
    color: "var(--text-secondary)",
}));

export const CountryCategory = styled("span")(() => ({
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: 700,
    marginRight: "15px",
    color: "var(--accent-green)",
    fontFamily: "var(--header-font)",
}));

export const ProductInfo = styled("span")(() => ({
    fontSize: "15px",
    fontWeight: 500,
    color: "var(--text-primary)",
}));

export const InfoDetails = styled("span")(() => ({
    fontSize: "17px",
    textTransform: "uppercase",
    fontWeight: 600,
    marginRight: "10px",
    color: "var(--accent-green)",
}));

export const PriceTitle = styled("span")(() => ({
    fontSize: "15px",
    textTransform: "initial",
    fontWeight: 600,
    marginRight: "10px",
    color: "var(--text-secondary)",
    marginBottom: "5px",
}));

export const BoisterousStringWrap = styled("span")(() => ({
    display: "flex",
    width: "100%",
    overflowX: "hidden",
    backgroundColor: "var(--bg-light)",
    borderRadius: "5px",
    padding: "5px 10px",
    border: "var(--border-subtle)",
}));

export const BoisterousStringAnimate = styled("span")(() => ({
    "@keyframes text": {
        "0%": {
            transform: "translate(0, 0)",
        },
        "100%": {
            transform: "translate(-1600%, 0)",
        },
    },
    width: "100%",
    whiteSpace: "nowrap",
    animation: "text 200s infinite linear",
    color: "var(--accent-green)",
    marginLeft: "10px",
    fontSize: "1.1rem",
    fontWeight: "600",
}));
