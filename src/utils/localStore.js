
export const storeUser = (token, clientId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('clientId', clientId);
}


export const storeSummary = (summary) => {
    localStorage.setItem('summary', summary);
}

export const getStoreSummary = () => {
    localStorage.getItem('summary');
}

export const clearStorage = () => {
    localStorage.clear();
}