import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CurrencyService } from '../currency/currency.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, from, map } from 'rxjs';
import { formatCurrency } from '../currency/currency-string.util';
import { CurrencyDTO } from '../currency/currencies.dto';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule, NgxSkeletonLoaderComponent],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {

  readonly #currencyService = inject(CurrencyService);

  currencies = this.#currencyService.getCurrencies()
  sortedCurrencies = computed(() => {
    if(!this.currencies.hasValue()) {
      return;
    }
    return this.currencies.value()?.response.sort((a, b) => a.name.localeCompare(b.name))
  })
  convertedAmount = this.#currencyService.convertCurrencies()

  fromCurrency = this.#currencyService.from;
  toCurrency = this.#currencyService.to;
  amount = this.#currencyService.amount;

  displayedAmount = computed(() => formatCurrency(this.convertedAmount.value()?.value, this.toCurrency()))

  currencyForm = new FormGroup({
    fromCurrency: new FormControl(),
    toCurrency: new FormControl(),
    amount: new FormControl('')
  })

  onUpdate = this.currencyForm.valueChanges.pipe(
    debounceTime(10),
    map((changes) => {
      if(changes.amount) {
        this.amount.set(Number(changes.amount));
      }
      if(changes.fromCurrency) {
        this.fromCurrency.set(changes.fromCurrency);
      }
      if(changes.toCurrency) {
        this.toCurrency.set(changes.toCurrency);
      }
    })
  ).subscribe()

  refresh() {
    const result = this.convertedAmount.reload();
    console.log(result)
  }

  swap() {
    const temp = this.currencyForm.controls.fromCurrency.value;
    this.currencyForm.controls.fromCurrency.setValue(this.currencyForm.controls.toCurrency.value);
    this.currencyForm.controls.toCurrency.setValue(temp);
    this.currencyForm.controls.amount.setValue(this.convertedAmount.value()?.value.toString() ?? '')
  }

}
