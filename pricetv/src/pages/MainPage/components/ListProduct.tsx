/* eslint-disable react-hooks/exhaustive-deps */
//react
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

// react-router-dom
import { useLocation } from "react-router-dom";

//redux
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { IProductItem } from "../../../types/types";

//material-ui
import { Grid } from "@mui/material";
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
        activeEl?.scrollIntoView({ behavior: "smooth" });

        const percentagePriceIncrease =
            programmList[activeIndex]?.percentage_price_increase;

        if (percentagePriceIncrease < 10) {
            setStateColor("green");
        } else if (percentagePriceIncrease < 30) {
            setStateColor("blue");
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
            <div
                key={item.sku}
                id={item.sku}
                style={
                    item.sku === programmList[activeIndex].sku
                        ? {
                              background: stateColor,
                              marginBottom: "6px",
                              padding: "0 0 0 2px",
                          }
                        : { marginBottom: "6px" }
                }
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="nowrap"
                >
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.name}
                            width="50px"
                            height="50px"
                            style={{ borderRadius: "5px", marginRight: "5px" }}
                        />
                    )}
                    <div>
                        <div>
                            category: <span>{item.category}</span>
                        </div>
                        <div>
                            name:{" "}
                            <span style={{ fontSize: "12px", fontWeight: 800 }}>
                                {item.name}
                            </span>
                        </div>
                    </div>
                </Grid>

                <hr style={{ margin: "5px 0 0 0" }} />
            </div>
        ));
    };

    return <>{renderList()}</>;
};

