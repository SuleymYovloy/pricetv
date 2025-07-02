//react
import { useEffect, useState } from "react";

//redux
import { useAppSelector } from "../../../hooks/redux";

//material-ui
import { Grid } from "@mui/material";

//utels
import { funSliced } from "../../../utils/sliced";

//style
import {
    CountryCategory,
    Data,
    DescCategory,
    IndicateBlockItem,
    IndicateBlockWraper,
    InfoDetails,
    PriceIncreaseDate,
    PriceTitle,
    ProductInfo,
    TitleCategory,
} from "../StylesMain";
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

    // Получаем разницу в миллисекундах между датами
    const timeDiff = endDate.getTime() - startDate.getTime();

    // Вычисляем количество дней и округляем до целого числа
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

    //   (0 = green), (1 = blue), (2 = red);
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
            setElement(0); // зеленый
        } else if (percentagePriceIncrease < 30) {
            setElement(1); // синий
        } else {
            setElement(2); // красный
        }
    }, [activeIndex, programmList]);

    if (programm === null) return <></>;
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            flexWrap="nowrap"
            style={{ height: "inherit" }}
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxHeight="-webkit-fill-available"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <CountryCategory>Country:</CountryCategory>{" "}
                    <span>{programm && programm["en_name"]}</span>
                    <img
                        src={programm && programm["img_url"]}
                        alt="flag"
                        width="40px"
                        height="40px"
                        style={{ marginLeft: "20px" }}
                    />
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
                <Grid>
                    <DescCategory>description:</DescCategory>
                    {funSliced(programItem["description"], 230)}
                    <hr style={{ width: "100%" }} />
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <InfoDetails>Inflation details:</InfoDetails>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <PriceTitle>
                            Price increase:{" "}
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
                        </PriceTitle>
                        <PriceTitle>
                            Price increase per day:{" "}
                            {programItem["price_increase_per_day"].toFixed(4)}{" "}
                            {currency}
                        </PriceTitle>
                        <PriceTitle>
                            Price increase rate: {programItem["rate"]} from{" "}
                            {programm["count_product"] !== null &&
                                programm["count_product"]}
                        </PriceTitle>
                        <PriceTitle>
                            Price Observation period in days:{" "}
                            {calculateObservationPeriod(
                                priceStartAndEndDate.startPriceData,
                                priceStartAndEndDate.endPriceData
                            )}
                        </PriceTitle>
                        <PriceIncreaseDate>
                            Highest price increase date:{" "}
                            <Data>
                                {programItem["highest_price_increase_date"]}
                            </Data>
                        </PriceIncreaseDate>
                        <hr style={{ width: "100%" }} />
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            wrap="nowrap"
                            style={{ width: "100%" }}
                        >
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="center"
                                style={{ width: "50%" }}
                            >
                                <span>
                                    price from:{" "}
                                    {priceStartAndEndDate.startPriceData}
                                </span>
                                <span>
                                    price up to:{" "}
                                    {priceStartAndEndDate.endPriceData}
                                </span>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                style={{ padding: "10px" }}
                            >
                                {ifoArr?.map((i, index) => (
                                    <IndicateBlockWraper key={index}>
                                        <IndicateBlockItem
                                            bg={i.color}
                                            animate={
                                                element === i.id && "boxShadow"
                                            }
                                            effect={
                                                element === i.id && "animation"
                                            }
                                            isActive={element === i.id}
                                        >
                                            <span>{i.title}</span>
                                        </IndicateBlockItem>
                                    </IndicateBlockWraper>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

