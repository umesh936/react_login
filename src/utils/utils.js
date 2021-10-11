import {getId, getToken} from "./localRetrieve";

//Reusable post function which can be used for PUT method too

export const postData = async (method, data, url) => {
    const requestOptions = {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    const response = await fetch(
        'http://125.17.108.33:11235/v1/emailer/auth',
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;

}

export const GetData = async () => {
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() }
    };
    const response = await fetch(
        'http://125.17.108.33:11235/v1/emailer/1/summary/demo',
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;

}

export const GetFeatureData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() }
    };
    const response = await fetch(
        `http://125.17.108.33:11235/v1/emailer/${clientId}/campaign/summary`,
        requestOptions
    );

    const getResponse = await response.json();
    return getResponse;
}

export const GetMonthlyData = async () => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() }
    };
    const response = await fetch(
        `http://125.17.108.33:11235/v1/emailer/${clientId}/campaign/active`,
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
export const logoutProfile = async (id) => {
    const requestOptions = {
        headers: { "x-em-token": getToken() },
        method: "DELETE"
    }
    const response = await fetch(
        `${BASEURL}/v1/emailer/${id}/auth`,
        requestOptions
    );
    const logoutResponse = await response.json();
    return logoutResponse;
}


export const BASEURL = 'http://125.17.108.33:11235/';