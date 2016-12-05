import  * as requester from './requester'

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username)
    
}
function register(username, password, callback) {
    let userData = {
        username: username,
        password: password
    };
    requester.post('user', '', "basic", userData)
        .then((response) => {
        saveSession(response);
        callback(true);
    });
}
function login(username, password, callback) {
    let userData = {
        username: username,
        password: password
    };
    requester.post('user', 'login', "basic", userData)
        .then((response) => {
        saveSession(response);
        callback(true);
    })
        .catch((err) => callback(false));
}
function logout(callback) {
    requester.post('user', '_logout', "kinvey", null)
        .then((response) => {
        sessionStorage.clear();
        callback(true);
        })
        .catch((err) => callback(false));
}
export {register, login, logout}