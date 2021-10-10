
export const storeEmailAndToken = (email, token) => {
    localStorage.setItem('email', email);
    localStorage.setItem('login_Token', token);
}


export const storeUserDetails = (id, token, firstName, lastName) => {
    localStorage.setItem('user_ID', id);
    localStorage.setItem('user_Token', token);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
}

export const storeUser = (token, clientId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('clientId', clientId);
}

export const clearStorage = () => {
    localStorage.clear();
}