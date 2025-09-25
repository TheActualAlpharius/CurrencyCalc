import { CurrencyDTO } from "./currencies.dto";

export function formatCurrency(amount?: number, currency?: CurrencyDTO) {
    if(!amount || !currency) return;
    const prefix = currency.symbol_first ? currency.symbol : '';
    const suffix = currency.symbol_first ? '' : currency.symbol;
    const twoSigFig = (Math.round(amount * 100) / 100).toFixed(currency.precision);
    return `${prefix}${twoSigFig}${suffix}`
}