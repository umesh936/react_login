import {getId, getToken} from "./localRetrieve";

//Reusable post function which can be used for PUT method too

export const postData = async (method, data, url) => {
    const requestOptions = {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    const response = await fetch(
        'http://125.17.108.33:11235/api/v1/emailer/auth',
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;

}

export const GetFeatureData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken(),
        "content-type": "application/json"}
    };
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/${clientId}/campaign/summary`,
        requestOptions
    );

    const getResponse = await response.json();
    return getResponse;
}

export const GetActiveData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() ,
            "content-type": "application/json"}
    };
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/${clientId}/campaign/month/active`,
        requestOptions
    );

    const getResponse = await response.json();
    return getResponse;
}

export const GetSummaryData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() ,
            "content-type": "application/json"}
    };
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/${clientId}/campaign/details`,
        requestOptions
    );

    const getResponse = await response.json();
    return getResponse;
}

export const GetSettingData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() ,
            "content-type": "application/json"}
    };
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/${clientId}/settings`,
        requestOptions
    );

    const getResponse = await response.json();
    return getResponse;
}

//used for PUT method without any body object
export const urlData = async (url) => {
    const requestOptions = {
        method: 'PUT'
    };
    const response = await fetch(
        `${BASEURL/url}`,
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;
}


//Logout profile function
export const logoutProfile = async () => {
    const clientId = getId()
    const requestOptions = {
        headers: { "x-em-token": getToken() },
        method: "DELETE"
    }
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/${clientId}/auth`,
        requestOptions
    );
    const logoutResponse = await response.json();
    return logoutResponse;
}


export const BASEURL = 'http://125.17.108.33:11235/api/';