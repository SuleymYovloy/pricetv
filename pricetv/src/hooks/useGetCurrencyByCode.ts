/* eslint-disable react-hooks/exhaustive-deps */

// react
import { useEffect, useState } from "react";

// react router dom
import { useLocation } from "react-router-dom";

//types
import { ICountry } from "../types/types";

export const useGetCurrencyByCode = (countries: [] | ICountry[])  => {
  const location = useLocation();

    const [currency, setCurrency] = useState<string>('');

  // Получаем валюту страны
  useEffect(() => {
    if (!countries.length) return;
    if (location.pathname === '/') {
      const cornt = countries.find((i: ICountry) => i['code'] === 'HU')?.currency;
      return setCurrency(cornt as string);
    } else {
      const cornt = countries.find((i: ICountry) => i['code'] === location.pathname.slice(1))?.currency;
      return setCurrency(cornt as string);
    }

  }, [countries]);


  return currency


}