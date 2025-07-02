
interface IPriceHistory {
    date: string,
    price: number
}

export interface IProductItem {
    article: string,
    category: string,
    create_at: string,
    description: string,
    high_volatility: number,
    id: number,
    image: string,
    is_active: boolean,
    is_last: boolean,
    long_liver: number,
    name: string,
    percentage_price_increase: number,
    price_history: IPriceHistory[],
    price_increase: number,
    price_increase_per_day: number,
    program: number,
    rate: number,
    short_category: string,
    sku: string,
    url: string,
    highest_price_increase_date: string
}

export interface ICountry{
    code: string,
    img_url: string,
    count_product: number,
    currency: string
}