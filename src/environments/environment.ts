// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  dev: true,
  staging: false,
  production: false,
  auth0: {
    domain: 'volley-mgmt-dev.eu.auth0.com',
    clientId: 'wl8fSLi1sb6LcE17uviU3iX4CSqX1X7Y',
    audience: 'https://api.dev.volley-mgmt.org.ua'
  },
  vmApi:{
    baseUrl: 'http://localhost:5000'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
