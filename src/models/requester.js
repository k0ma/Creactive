import $ from 'jquery'
const baseUrl = "https://baas.kinvey.com/";
const appId = "kid_rkGO2QlXg";
const appSecret = "261211d4379f405a8f56bbed70d0d5f6";

function getAuthorizationHeaders(auth) {
    let header = {
        "Authorization":""
    };
    switch(auth){
        case "basic":
            header["Authorization"] = "Basic " + btoa(appId + ":" + appSecret);
            break;
        case "kinvey":
            header["Authorization"] = "Kinvey " + sessionStorage.getItem("authToken");
            break;
    }
    return header;
}
function get(module, url, auth) {
    let hostUrl = baseUrl + module  + "/" + appId + "/"+ url;
    let header = getAuthorizationHeaders(auth);
    return $.ajax({
        method: "GET",
        url: hostUrl,
        headers: header,

    })
}

function post(module, url, auth, data) {
    let hostUrl = baseUrl + module  + "/" + appId + "/"+ url;
    let header = getAuthorizationHeaders(auth);
    let request = {
        method: "POST",
        url: hostUrl,
        headers: header,
    };
    if (data){
        request.data = data;
    }
    return $.ajax(request);
}

function update(module, url, auth, data) {
    let hostUrl = baseUrl + module  + "/" + appId + "/"+ url;
    let header = getAuthorizationHeaders(auth);
    let request = {
        method: "PUT",
        url: hostUrl,
        headers: header,
        data:data
    };
    return $.ajax(request);
}
export {get, post, update}