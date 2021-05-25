const getIsAuthSelector = state => state.auth.token.idToken;

const getEmailSelector = state => state.auth.token.email;

export  {getIsAuthSelector, getEmailSelector};