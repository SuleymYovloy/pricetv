import { display, fontSize, height, styled } from "@mui/system";

export const TitleFooter = styled("div")(() => ({
    paddingBottom: "5px",
    fontSize: "16px",
    textTransform: "initial",
    color: "#00ffff",
    fontWeight: 600,
    display: "flex",

    "@media (max-width: 960px)": {
        gridArea: "auto",
        height: "auto",
        fontSize: "0.8rem",
    },
}));

export const TitleFooterFlag = styled("div")(() => ({
    display: "flex",
    height: "100%",
    alignItems: "center",
    paddingBottom: "5px",
    fontSize: "20px",
    textTransform: "initial",
    color: "#00ffff",
    fontWeight: 600,
    marginRight: "10px",

    "@media (max-width: 760px)": {
        gridArea: "auto",
        height: "auto",
        fontSize: "16px",
    },
}));
