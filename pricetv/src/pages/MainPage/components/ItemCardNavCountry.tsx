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
                marginRight: "8px",
                border: "1px solid rgba(14, 12, 13, 0.55)",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "var(--bg-light)",
                padding: "8px 8px",
                boxShadow: "var(--shadow-soft)",
            }}
            sx={{
                // Стили по умолчанию
                transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                },
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
                    color: "#00E676",
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
