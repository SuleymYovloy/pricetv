import { FC, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { IProductItem } from "../../../types/types";

import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { getProgramsTop } from "../../../store/actions/getProductsTopSlice";

interface IListProduct {
    activeIndex: number;
}

export const ListProduct: FC<IListProduct> = ({ activeIndex }) => {
    const location = useLocation();
    const [stateColor, setStateColor] = useState("red");
    const dispatch = useAppDispatch();

    const { programmList, programm } = useAppSelector((state) => ({
        programmList: state.getProgrammListSlice.programmList,
        programm: state.getProgrammSlice.programm,
    }));

    useEffect(() => {
        if (!programmList.length) return;
        const activeEl = document.getElementById(
            programmList[activeIndex]?.sku
        );
        activeEl?.scrollIntoView({ behavior: "smooth", block: "center" });

        const percentagePriceIncrease =
            programmList[activeIndex]?.percentage_price_increase;

        if (percentagePriceIncrease < 10) {
            setStateColor("var(--accent-green)");
        } else if (percentagePriceIncrease < 30) {
            setStateColor("var(--text-secondary)");
        } else {
            setStateColor("red");
        }

        if (programmList[activeIndex]?.is_last) {
            setTimeout(() => {
                const getProgrammsTop = async () => {
                    const countryCode =
                        location.pathname === "/" ? "/AUS" : location.pathname;
                    const programSlug = programm["programs"][0]["slug"];
                    await dispatch(getProgramsTop(countryCode, programSlug));
                };
                getProgrammsTop();
            }, 15000);
        }
    }, [activeIndex, programmList, location.pathname, programm]);

    const renderList = () => {
        return programmList.map((item: IProductItem) => (
            <ProductItemWrapper
                key={item.sku}
                id={item.sku}
                isActive={item.sku === programmList[activeIndex].sku}
                activeColor={stateColor}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="nowrap"
                >
                    {item.image && (
                        <ProductImage src={item.image} alt={item.name} />
                    )}
                    <ProductDetails>
                        <ProductCategory>
                            category: <span>{item.category}</span>
                        </ProductCategory>
                        <ProductName>
                            name: <span>{item.name}</span>
                        </ProductName>
                    </ProductDetails>
                </Grid>

                <ProductSeparator />
            </ProductItemWrapper>
        ));
    };

    return <>{renderList()}</>;
};

interface ProductItemWrapperProps {
    isActive: boolean;
    activeColor: string;
}

const ProductItemWrapper = styled("div")<ProductItemWrapperProps>(
    ({ isActive, activeColor }) => ({
        marginBottom: "6px",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: isActive ? "rgba(0, 230, 118, 0.1)" : "transparent",
        border: isActive ? `1px solid ${activeColor}` : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        color: "var(--text-primary)",
        fontFamily: "var(--main-font)",
        lineHeight: "1.4",
    })
);

const ProductImage = styled("img")(() => ({
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    marginRight: "10px",
    objectFit: "cover",
}));

const ProductDetails = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}));

const ProductCategory = styled("div")(() => ({
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    span: {
        color: "var(--text-primary)",
        fontWeight: 500,
    },
}));

const ProductName = styled("div")(() => ({
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    span: {
        fontSize: "1rem",
        fontWeight: 700,
        color: "var(--accent-green)",
    },
    "@media (max-width: 760px)": {
        fontSize: "0.8rem",
    },
}));

const ProductSeparator = styled("hr")(() => ({
    margin: "10px 0 0 0",
    border: "none",
    borderTop: "1px solid var(--border-subtle)",
}));
