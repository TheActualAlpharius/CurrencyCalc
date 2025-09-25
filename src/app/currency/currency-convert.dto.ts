export interface CurrencyConvertDTO {
    response: {
        timestamp: number;
        date: string;
        from: string;
        to: string;
        amount: number;
        value: number;
    },
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
    meta: {
        code: number;
        disclaimer: string;
    }
}