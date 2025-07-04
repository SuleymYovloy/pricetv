//react
import { FC } from "react";

// material-ui
import { Grid } from "@mui/material";
import { FormatterNumber } from "../../../utils/fomatterNumber";

interface IItemCardNavCountry {
    countrImg: string;
    countryCode: string;
    countProduct: number;
    onClick: (code: string) => void;
}

export const ItemCardNavCountry: FC<IItemCardNavCountry> = ({
    countrImg,
    countProduct,
    countryCode,
    onClick,
}) => {
    if (countryCode === "TEST") return null;
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            style={{
                width: "70px",
                height: "50px",
                border: "1px solid #dab5b5f0",
                marginRight: "10px",
                borderRadius: "2px",
                cursor: "pointer",
            }}
            flexWrap="nowrap"
            onClick={() => onClick(countryCode)}
        >
            <img
                src={countrImg}
                alt={countrImg}
                style={{ width: "20px", height: "20px", marginBottom: "2px" }}
            />
            <span
                style={{
                    backgroundColor: "#a4e087c9",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "10px",
                    width: "92%",
                    height: "30%",
                    alignItems: "center",
                }}
            >
                {FormatterNumber(countProduct, 2)}
            </span>
        </Grid>
    );
};
