export interface CurrenciesDTO {

    response: CurrencyDTO[];
    meta: {
        code: number;
        diclaimer: string;
    }

}

export interface CurrencyDTO {
    id: number;
    name: string;
    short_code: string;
    code: string;
    precision: number;
    subunit: number;
    symbol: string;
    symbol_first: boolean;
    decimal_mark: string;
    thousands_separator: string;
}