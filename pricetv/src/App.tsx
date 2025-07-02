/* eslint-disable react-hooks/exhaustive-deps */

//react
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//redux
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getCountries } from "./store/actions/getCountriesSlice";

//componets
import { Loading } from "./components/Loading/Loading";

//styles
import "./App.css";
import { StartPage } from "./pages/StartPage/StartPage";

// lazy imports
const Main = lazy(() =>
    import("./pages/MainPage/MainPage").then(({ Main }) => ({
        default: Main,
    }))
);

function App() {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const { isLoading } = useAppSelector((state) => state.getCountriesSlice);

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    if (isLoading) return <Loading />;

    return (
        <Suspense fallback={<Loading />}>
            {location.pathname === "/" ? (
                <Routes>
                    <Route path="/" element={<StartPage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/:counrty" element={<Main />} />
                </Routes>
            )}
        </Suspense>
    );
}

export default App;

