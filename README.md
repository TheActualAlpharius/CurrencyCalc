# CurrencyCalc

## Installing dependencies
Angular20 is required
To install required depencies run:
```bash
npm ci
```

## Setting up environment.ts

You must add your currencybeacon API_KEY to environment.development.ts.
The file should look like the following and be at src/environments/environments.development.ts

```TS
export const environment = {
    API_KEY: 'YOUR_KEY'
};
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
