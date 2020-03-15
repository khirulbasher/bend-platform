export const commonResource = {
  HOST_URL: 'http://localhost:2343/',
  CONTEXT: 'bend/'
};

export const environment = {
  production: false,
  API_URL: commonResource.HOST_URL+commonResource.CONTEXT,
  DEBUG_ENABLE : true,
  outlet: {
    NAVBAR: 'navbar',
    FOOTER: 'footer'
  },
  cache: {
    ACCOUNT_INFO: 'ACCOUNT_INFO',
    TOKEN: 'TOKEN',
    AUTHENTICATION_STATE: 'AUTHENTICATION_STATE',
    AUTHORITIES: 'AUTHORITIES'
  }

};
