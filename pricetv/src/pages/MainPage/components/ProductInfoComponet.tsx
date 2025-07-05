import { useEffect, useState } from "react";

import { useAppSelector } from "../../../hooks/redux";

import { Grid } from "@mui/material";
import { display, styled } from "@mui/system";

import { funSliced } from "../../../utils/sliced";

import {
    CountryCategory,
    DescCategory,
    InfoDetails,
    PriceTitle,
    ProductInfo,
    TitleCategory,
} from "../../StylesMain";
import { ICountry, IProductItem } from "../../../types/types";
import { useGetCurrencyByCode } from "../../../hooks/useGetCurrencyByCode";

interface IProductInfoComponet {
    programItem: IProductItem;
    countries: [] | ICountry[];
    priceStartAndEnd: { startprice: number; endprice: number };
    priceStartAndEndDate: {
        startPriceData: string;
        endPriceData: string;
    };
    activeIndex: number;
}

const ifoArr = [
    { id: 0, color: "green", title: "<10%" },
    { id: 1, color: "blue", title: "<30%" },
    { id: 2, color: "red", title: "+30%" },
];

function calculateObservationPeriod(startDateStr: string, endDateStr: string) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const timeDiff = endDate.getTime() - startDate.getTime();

    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return diffDays;
}

export const ProductInfoComponet = ({
    programItem,
    countries,
    priceStartAndEnd,
    priceStartAndEndDate,
    activeIndex,
}: IProductInfoComponet) => {
    const { programm } = useAppSelector((state) => state.getProgrammSlice);
    const { programmList } = useAppSelector(
        (state) => state.getProgrammListSlice
    );
    const [element, setElement] = useState<null | number>(null);

    const currency = useGetCurrencyByCode(countries);

    useEffect(() => {
        if (!programmList.length) return;

        const percentagePriceIncrease =
            programmList[activeIndex]?.percentage_price_increase;

        if (
            percentagePriceIncrease === null ||
            percentagePriceIncrease === undefined
        ) {
            setElement(null);
        } else if (percentagePriceIncrease < 10) {
            setElement(0);
        } else if (percentagePriceIncrease < 30) {
            setElement(1);
        } else {
            setElement(2);
        }
    }, [activeIndex, programmList]);

    if (programm === null) return <></>;
    return (
        <ProductInfoWrapper>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <CountryCategory>Country:</CountryCategory>{" "}
                <CountryName>{programm && programm["en_name"]}</CountryName>
                <FlagImage src={programm && programm["img_url"]} alt="flag" />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <TitleCategory>category:</TitleCategory>{" "}
                <ProductInfo>{programItem["short_category"]}</ProductInfo>
            </Grid>
            <DescriptionContainer>
                <DescCategory>description:</DescCategory>
                <DescriptionText>
                    {funSliced(programItem["description"], 230)}
                </DescriptionText>
                <ProductSeparator />
            </DescriptionContainer>
            <InflationDetailsContainer>
                <InfoDetails>Inflation details:</InfoDetails>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <PriceDetail>
                        <PriceTitle>Price increase: </PriceTitle>
                        <PriceValue>
                            {programItem["percentage_price_increase"].toFixed(
                                2
                            )}
                            % (
                            {Math.sign(programItem["price_increase"]) === -1
                                ? ""
                                : "+"}
                            {programItem["price_increase"].toFixed(2)}{" "}
                            {currency}), from {priceStartAndEnd.startprice} to{" "}
                            {priceStartAndEnd.endprice} {currency}
                        </PriceValue>
                    </PriceDetail>
                    <PriceDetail>
                        <PriceTitle>Price increase per day: </PriceTitle>
                        <PriceValue>
                            {programItem["price_increase_per_day"].toFixed(4)}{" "}
                            {currency}
                        </PriceValue>
                    </PriceDetail>
                    <PriceDetail>
                        <PriceTitle>Price increase rate: </PriceTitle>
                        <PriceValue>
                            {programItem["rate"]} from{" "}
                            {programm["count_product"] !== null &&
                                programm["count_product"]}
                        </PriceValue>
                    </PriceDetail>
                    <PriceDetail>
                        <PriceTitle>
                            Price Observation period in days:{" "}
                        </PriceTitle>
                        <PriceValue>
                            {calculateObservationPeriod(
                                priceStartAndEndDate.startPriceData,
                                priceStartAndEndDate.endPriceData
                            )}
                        </PriceValue>
                    </PriceDetail>
                    <PriceDetail>
                        <PriceTitle>Highest price increase date: </PriceTitle>
                        <PriceValue>
                            {programItem["highest_price_increase_date"]}
                        </PriceValue>
                    </PriceDetail>
                    <ProductSeparator />
                    <Indicates>
                        <IndicatesTitles>
                            <PricePeriod>
                                price from:{" "}
                                <span>
                                    {priceStartAndEndDate.startPriceData}
                                </span>
                            </PricePeriod>
                            <PricePeriod>
                                price up to:{" "}
                                <span>{priceStartAndEndDate.endPriceData}</span>
                            </PricePeriod>
                        </IndicatesTitles>
                        <IndicateBlockWraper>
                            {ifoArr?.map((i, index) => (
                                <IndicateBlockItem
                                    key={index}
                                    bg={i.color}
                                    isActive={element === i.id}
                                >
                                    <span>{i.title}</span>
                                </IndicateBlockItem>
                            ))}
                        </IndicateBlockWraper>
                    </Indicates>
                </Grid>
            </InflationDetailsContainer>
        </ProductInfoWrapper>
    );
};

const ProductInfoWrapper = styled("div")(() => ({
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "10px",
    color: "var(--text-primary)",
    fontFamily: "var(--main-font)",
    fontSize: "1rem",
    lineHeight: "1.6",

    "@media (max-width: 760px)": {
        fontSize: "0.8rem",
    },
}));

const CountryName = styled("span")(() => ({
    fontSize: "16px",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginRight: "10px",
}));

const FlagImage = styled("img")(() => ({
    width: "30px",
    height: "30px",
    borderRadius: "4px",
    marginLeft: "10px",
}));

const Indicates = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    wrap: "nowrap",
    width: "100%",
    marginTop: "10px",

    "@media (max-width: 760px)": {
        flexDirection: "column",
        alignItems: "flex-start",
    },
}));

const IndicatesTitles = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "50%",

    "@media (max-width: 760px)": {
        width: "100%",
    },
}));

const DescriptionContainer = styled("div")(() => ({
    marginTop: "15px",
    marginBottom: "15px",
    width: "100%",
}));

const DescriptionText = styled("span")(() => ({
    fontSize: "1rem",
    color: "var(--text-secondary)",
    display: "block",
    marginTop: "5px",

    "@media (max-width: 760px)": {
        fontSize: "0.8rem",
    },
}));

const ProductSeparator = styled("hr")(() => ({
    width: "100%",
    margin: "15px 0",
    border: "none",
    borderTop: "1px solid var(--border-subtle)",
}));

const InflationDetailsContainer = styled("div")(() => ({
    width: "100%",
    marginTop: "15px",
}));

const PriceDetail = styled("div")(() => ({
    display: "flex",
    alignItems: "baseline",
    marginBottom: "8px",
    width: "100%",
}));

const PriceValue = styled("span")(() => ({
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "var(--text-primary)",

    "@media (max-width: 760px)": {
        fontSize: "0.8rem",
    },
}));

const PricePeriod = styled("span")(() => ({
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    marginBottom: "5px",
    span: {
        fontWeight: 600,
        color: "var(--text-primary)",
    },

    "@media (max-width: 760px)": {
        width: "100%",
    },
}));

interface IndicateBlockItemProps {
    bg: string;
    isActive: boolean;
}

const IndicateBlockWraper = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "var(--bg-light)",
    border: "var(--border-subtle)",
    boxShadow: "var(--shadow-soft)",
}));

const IndicateBlockItem = styled("div")<IndicateBlockItemProps>(
    ({ bg, isActive }) => ({
        width: "50px",
        height: "30px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "#fff",
        backgroundColor:
            bg === "green" ? "#00e676" : bg === "blue" ? "#00b0ff" : "#ff1744",
        border: isActive ? "2px solid var(--text-primary)" : "none",
        boxShadow: isActive ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none",
        transition: "all 0.3s ease",
    })
);
