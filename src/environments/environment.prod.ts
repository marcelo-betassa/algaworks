export const environment = {
  production: true,
  apiURL: "https://algamoney-api.herokuapp.com", // https://algamoney-api.herokuapp.com
  whitelistedDomains: [ new RegExp("https://algamoney-api.herokuapp.com")],
  blacklistedRoutes:  [new RegExp("\/oauth\/token")]
};
