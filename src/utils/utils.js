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
    return response.json();
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
    return response.json();
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
    return response.json();
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
    return response.json();
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
    return response.json();
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
    return response.json();
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
    return response.json();
}

export const submitGenerateDataRequest = async (campName) => {
    const clientId = getId()
    const requestOptions = {
        method: "GET",
        headers: { "x-em-token": getToken() ,
            "content-type": "application/json"}
    };
    const response = await fetch(
        `http://125.17.108.33:11235/api/v1/emailer/report/smtp/${clientId}/${campName}`,
        requestOptions
    );

    return response.text();

}

export const BASEURL = 'http://125.17.108.33:11235/api/';