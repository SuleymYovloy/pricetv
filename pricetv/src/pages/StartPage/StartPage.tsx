import { Grid, Paper } from "@mui/material";
import { display, styled } from "@mui/system";
import { Loading } from "../../components/Loading/Loading";
import { useAppSelector } from "../../hooks/redux";
import { CardCountrie } from "./components/CardCountrie";
import { useNavigate } from "react-router-dom";
import { getShift } from "../../store/reducers/getProgrammListSlice";
import { useAppDispatch } from "../../hooks/redux";

const StatsContainer = styled("div")({
    boxSizing: "border-box",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "12px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "25px",
    boxShadow: "var(--shadow-soft)",
    width: "100%",
    maxWidth: "1050px",
    overflow: "hidden",
    flexWrap: "wrap",
    gap: "30px",
    border: "var(--border-subtle)",
    "@media (max-width: 768px)": {
        padding: "20px",
        gap: "20px",
    },
    "@media (max-width: 480px)": {
        padding: "15px",
        gap: "15px",
    },
});

const Stat = styled("div")({
    backgroundColor: "var(--bg-light)",
    borderRadius: "8px",
    padding: "20px 25px",
    textAlign: "center",
    boxShadow: "var(--shadow-soft)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "140px",
    flexGrow: "1",
    fontFamily: "var(--main-font)",
    color: "var(--text-primary)",
    "@media (max-width: 768px)": {
        minWidth: "120px",
        padding: "10px 15px",
    },
    "@media (max-width: 480px)": {
        minWidth: "100px",
        padding: "8px 12px",
    },
});

const StatValue = styled("div")({
    color: "var(--accent-green)",
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "8px",
    fontFamily: "var(--header-font)",
    "@media (max-width: 768px)": {
        fontSize: "1.8rem",
    },
    "@media (max-width: 480px)": {
        fontSize: "1.4rem",
    },
});

const StatLabel = styled("div")({
    color: "var(--text-secondary)",
    fontSize: "0.8rem",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    "@media (max-width: 768px)": {
        fontSize: "0.9rem",
    },
    "@media (max-width: 480px)": {
        fontSize: "0.6rem",
    },
});

export const StartPage = () => {
    const { isLoading, countries } = useAppSelector(
        (state) => state.getCountriesSlice
    );
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNavigate = (code: string) => {
        dispatch(getShift(5));
        navigate(code);
    };

    if (isLoading) return <Loading />;
    return (
        <>
            <StatsContainer>
                <Stat>
                    <StatValue>15</StatValue>
                    <StatLabel>COUNTRIES</StatLabel>
                </Stat>
                <Stat>
                    <StatValue>1,631,762</StatValue>
                    <StatLabel>ITEMS</StatLabel>
                </Stat>
                <Stat>
                    <StatValue>104,343,744</StatValue>
                    <StatLabel>PRICES</StatLabel>
                </Stat>
                <Stat>
                    <StatValue>40</StatValue>
                    <StatLabel>STORES</StatLabel>
                </Stat>
            </StatsContainer>
            <Wrapper>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {countries?.map((countrie, index) => {
                        return (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Item
                                    onClick={() =>
                                        handleNavigate(countrie.code)
                                    }
                                >
                                    {" "}
                                    <CardCountrie {...countrie} />
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </Wrapper>
        </>
    );
};

const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "10px",
    boxShadow: "var(--shadow-soft)",
    padding: "25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "var(--bg-light)",
    color: "var(--text-primary)",
    border: "var(--border-subtle)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
    },
    "@media (max-width: 768px)": {
        padding: "15px",
    },
    "@media (max-width: 480px)": {
        padding: "10px",
    },
}));

const Wrapper = styled("div")(({ theme }) => ({
    width: "90%",
    boxSizing: "border-box",
    backgroundColor: "var(--bg-medium)",
    borderRadius: "12px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    marginBottom: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "30px",
    boxShadow: "var(--shadow-soft)",
    overflow: "hidden",
    flexWrap: "wrap",
    minHeight: "auto",
    border: "var(--border-subtle)",
    "@media (max-width: 768px)": {
        width: "95%",
        padding: "25px",
    },
    "@media (max-width: 480px)": {
        width: "100%",
        padding: "20px",
        marginTop: "20px",
        marginBottom: "40px",
    },
}));
