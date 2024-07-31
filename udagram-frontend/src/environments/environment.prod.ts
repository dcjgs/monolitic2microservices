// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'My Custom Insta Udagram App',
 // apiHost: 'http://a8546fb9d144b4d55a7ff2fd51aa3192-1950614716.us-west-2.elb.amazonaws.com:8080/api/v0'
  apiHost: 'http://a6df2b00ded2746a180c0570856ed2a7-313534244.us-west-2.elb.amazonaws.com:8080/api/v0'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
