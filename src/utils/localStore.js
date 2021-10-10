
export const storeUser = (token, clientId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('clientId', clientId);
}

export const clearStorage = () => {
    localStorage.clear();
}