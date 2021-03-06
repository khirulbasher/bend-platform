// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const commonResource = {
  HOST_URL: 'http://localhost:8788',
  CONTEXT: '/api/bend-ficket-app'
};

export const environment = {
  API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
  production: false,
  DEBUG_ENABLE: true,
  outlet: {
    NAVBAR: 'navbar',
    FOOTER: 'footer',
    CONTAINER_CONTAINER: 'container',
    CONTAINER_STRAIGHT: 'straight',
    CONTAINER_FLUID: 'container-fluid',
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
