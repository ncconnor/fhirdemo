
export const environment = {
  production: false,
  auth0: {
    domain: '<YOUR_AUTH0_DOMAIN>',
    clientId: '<YOUR_AUTH0_CLIENT_ID>',
    authorizationParams: {
      audience: '<YOUR_FHIR_SERVER_BASE_URL>',
      scope: 'openid profile email launch/patient patient/*.read',
    },
  },
  fhirBaseUrl: '<YOUR_FHIR_SERVER_BASE_URL>',
};
