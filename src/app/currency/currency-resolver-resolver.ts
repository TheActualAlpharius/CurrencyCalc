import { ResolveFn } from '@angular/router';

export const currencyResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
