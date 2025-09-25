import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CurrenciesDTO, CurrencyDTO } from './currencies.dto';
import { environment } from '../../environments/environment.development';
import { CurrencyConvertDTO } from './currency-convert.dto';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  getCurrencies() {
     return httpResource<CurrenciesDTO>(
      () => ({
        url: `https://api.currencybeacon.com/v1/currencies`,
        headers: {
          Authorization: `Bearer ${environment.API_KEY}`
        }
      })
     )
  }

  from = signal<CurrencyDTO | undefined>(undefined);
  to = signal<CurrencyDTO | undefined>(undefined);
  amount = signal<number | undefined>(undefined);

  convertCurrencies() {
    return httpResource<CurrencyConvertDTO>(
      () => {
        const isMissingParams = !this.from()?.short_code || !this.to()?.short_code || !this.amount();
        if(isMissingParams) {
          return undefined;
        }
        return {
          url: `https://api.currencybeacon.com/v1/convert?from=${this.from()?.short_code}&to=${this.to()?.short_code}&amount=${this.amount()}`,
          headers: {
            Authorization: `Bearer ${environment.API_KEY}`
          }};
      }
     )
  }

}
