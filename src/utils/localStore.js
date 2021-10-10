
export const storeUser = (token, clientId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('clientId', clientId);
}


export const storeSummary = (summary, clientId) => {
    localStorage.setItem('summary', summary);
    localStorage.setItem('clientId', clientId);
}

export const getStoreSummary = () => {
    localStorage.getItem('summary');
}

export const clearStorage = () => {
    localStorage.clear();
}