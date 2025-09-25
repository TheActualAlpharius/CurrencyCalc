import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currencyResolverResolver } from './currency-resolver-resolver';

describe('currencyResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currencyResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
