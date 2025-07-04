import { FC } from "react";
import { fontSize, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { getShift } from "../../../store/reducers/getProgrammListSlice";
import { useAppDispatch } from "../../../hooks/redux";

type Props = {
    code: string;
    currency: string;
    img_url: string;
    count_product: number;
};

export const CardCountrie: FC<Props> = ({
    code,
    currency,
    img_url,
    count_product,
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNavigate = () => {
        dispatch(getShift(5));
        navigate(code);
    };
    return (
        <WrapperCard onClick={handleNavigate}>
            <img src={img_url} alt={code} width="20px" height="20px" />
            <h2>{code}</h2>
            <p>{currency}</p>
            <p>TOTAL: {count_product}</p>
        </WrapperCard>
    );
};

const WrapperCard = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1vw",
    "@media (max-width: 920px)": {
        fontSize: "1.2vw",
    },
    "@media (max-width: 768px)": {
        fontSize: "1.6vw",
    },
}));

