import { CurrencyDTO } from "./currencies.dto";

export function formatCurrency(amount?: number, currency?: CurrencyDTO) {
    if(!amount || !currency) return;
    const prefix = currency.symbol_first ? currency.symbol : '';
    const suffix = currency.symbol_first ? '' : currency.symbol;
    const withPrecision = (Math.round(amount * Math.pow(10, currency.precision)) / Math.pow(10, currency.precision)).toFixed(currency.precision);
    return `${prefix}${withPrecision}${suffix}`
}