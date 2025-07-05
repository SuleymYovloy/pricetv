import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getProgramm } from "../../store/actions/getProgrammSlice";
import {
    getProgrammList,
    nextPageProgrammList,
} from "../../store/actions/getProgrammList";

import { Chart } from "../../components/Chart/Chart";
import { ListProduct } from "./components/ListProduct";
import { ProductInfoComponet } from "./components/ProductInfoComponet";
import { Loading } from "../../components/Loading/Loading";

import {
    BoisterousStringAnimate,
    BoisterousStringWrap,
    DescGrid,
    GrafGrid,
    ImgGrid,
    ListItemGrid,
    Parent,
    ProgramGrid,
} from "../StylesMain";
import { Box, Grid } from "@mui/material";
import { TitleFooter, TitleFooterFlag } from "./StylesMain";
import { ICountry } from "../../types/types";
import { ItemCardNavCountry } from "./components/ItemCardNavCountry";
import { getProgramsTop } from "../../store/actions/getProductsTopSlice";
import { ProgramsTime } from "../../components/ProgramsTime/ProgramsTime";

export const Main = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const { programmList, next, shift } = useAppSelector(
        (state) => state.getProgrammListSlice
    );
    const { programm } = useAppSelector((state) => state.getProgrammSlice);
    const { countries } = useAppSelector((state) => state.getCountriesSlice);
    const { countriesTop } = useAppSelector(
        (state) => state.getProductsTopSlice
    );

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [priceStartAndEnd, setpriceStartAndEnd] = useState({
        startprice: 0,
        endprice: 0,
    });
    const [priceStartAndEndDate, setPriceStartAndEndDate] = useState({
        startPriceData: "",
        endPriceData: "",
    });

    useEffect(() => {
        if (!programmList.length) return;
        const start = programmList[activeIndex]["price_history"][0]?.price;
        const end =
            programmList[activeIndex]["price_history"][
                programmList[activeIndex]["price_history"].length - 1
            ]?.price;
        const startData = programmList[activeIndex]["price_history"][0]?.date;
        const endData =
            programmList[activeIndex]["price_history"][
                programmList[activeIndex]["price_history"].length - 1
            ]?.date;

        setpriceStartAndEnd({ startprice: start, endprice: end });
        setPriceStartAndEndDate({
            startPriceData: startData,
            endPriceData: endData,
        });
    }, [activeIndex, programmList]);

    useEffect(() => {
        if (!programmList?.length) return;

        const interval = setInterval(() => {
            setActiveIndex((current: number) => {
                if (current === programmList.length - 1) {
                    clearInterval(interval);
                    dispatch(nextPageProgrammList(next, shift));
                    return 0;
                }
                return current + 1;
            });
        }, 15000);

        return () => clearInterval(interval);
    }, [programmList]);

    useEffect(() => {
        const getProgrammData = async () => {
            if (location.pathname === "/") {
                return await dispatch(getProgramm("/AUS"));
            }
            return await dispatch(getProgramm(location.pathname));
        };
        getProgrammData();
    }, []);

    useEffect(() => {
        if (programm === null) return;
        dispatch(
            getProgrammList(
                programm.code,
                1,
                programm.programs[0]["slug"],
                shift
            )
        );
    }, [programm]);

    useEffect(() => {
        if (!programm) return;
        const getProgrammsTop = async () => {
            if (location.pathname === "/") {
                return await dispatch(
                    getProgramsTop("/AUS", programm["programs"][0]["slug"])
                );
            }
            return await dispatch(
                getProgramsTop(
                    location.pathname,
                    programm["programs"][0]["slug"]
                )
            );
        };
        getProgrammsTop();
    }, [programm]);

    const handleOpenNewProgramByCode = (code: string) => {
        window.open(`${window.location.origin}/${code} `);
    };

    const dateProgramm = useCallback(() => {
        if (!programm) return;
        return <ProgramsTime words={programm["programs"] || []} />;
    }, [programm]);

    const boisterousStringAnimateRender = useMemo(() => {
        return countriesTop.map(
            (
                item: { name: string; percentage_price_increase: number },
                index: number
            ) => {
                const znack =
                    Math.sign(item.percentage_price_increase) === -1
                        ? false
                        : true;
                return (
                    <span style={{ color: "#ffffff" }} key={index}>
                        {item.name}
                        {" : "}
                        <span
                            style={{
                                color: znack ? "green" : "red",
                                marginRight: "20px",
                            }}
                        >
                            {item.percentage_price_increase.toFixed(2)}%
                        </span>
                    </span>
                );
            }
        );
    }, [countriesTop]);

    if (!programmList.length) return <Loading />;

    return (
        <Parent>
            <ImgGrid>
                <img
                    src={programmList[activeIndex]["image"]}
                    alt={programmList[activeIndex]["name"]}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        borderRadius: "10px",
                    }}
                />
            </ImgGrid>
            <GrafGrid>
                {
                    <Chart
                        productInfo={programmList[activeIndex]["price_history"]}
                    ></Chart>
                }
            </GrafGrid>
            <DescGrid>
                <ProductInfoComponet
                    programItem={programmList[activeIndex]}
                    countries={countries}
                    priceStartAndEnd={priceStartAndEnd}
                    priceStartAndEndDate={priceStartAndEndDate}
                    activeIndex={activeIndex}
                />
            </DescGrid>
            <ProgramGrid>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{ height: "100%" }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-around"
                        alignItems="flex-start"
                        wrap="nowrap"
                        style={{ width: "100%" }}
                    >
                        <TitleFooter>
                            Schedule for today (ET time): {dateProgramm()}
                        </TitleFooter>
                        <Grid
                            container
                            className="runline"
                            style={{ display: "flex", width: "100%" }}
                        >
                            <TitleFooter
                                style={{
                                    minWidth: "fit-content",
                                    marginRight: "5px",
                                }}
                            >
                                Top price increase SKU:
                            </TitleFooter>
                            <BoisterousStringWrap>
                                <BoisterousStringAnimate>
                                    {boisterousStringAnimateRender}
                                </BoisterousStringAnimate>
                            </BoisterousStringWrap>
                        </Grid>

                        <TitleFooter>
                            Submit your SKU: mail@getrealprice.com
                        </TitleFooter>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        wrap="nowrap"
                    >
                        <TitleFooterFlag>
                            Click flag for countries inflation:{" "}
                        </TitleFooterFlag>
                        <Box
                            sx={{
                                display: "flex",
                                width: "50%",

                                overflow: "visible",
                                paddingBottom: "7px",
                                "&::-webkit-scrollbar": {
                                    width: "10px",
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor: "#212121",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#555",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            {countries?.map((country: ICountry) => {
                                return (
                                    <React.Fragment key={country.code}>
                                        <ItemCardNavCountry
                                            countrImg={country.img_url}
                                            countryCode={country.code}
                                            countProduct={country.count_product}
                                            onClick={handleOpenNewProgramByCode}
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </ProgramGrid>
            <ListItemGrid>
                <ListProduct activeIndex={activeIndex} />
            </ListItemGrid>
        </Parent>
    );
};
