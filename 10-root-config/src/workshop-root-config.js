import { registerApplication, start } from "single-spa";

//registerApplication({
 // name: "@single-spa/welcome",
 // app: () =>
  //  System.import(
  //    "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  //  ),
  //activeWhen: ["/"],
//});

 registerApplication({
   name: "@workshop/react-app",
   app: () => System.import('@workshop/react-app'),
   activeWhen: ["/"]
 });


start({
  urlRerouteOnly: true,
});
