import { useRouter } from "next/router";

const CONSTANTS = {
    ADMIN_TOKEN_NAME: 'AdminToken',
    LOCAL_STORAGE_KEY: 'AdminToken',
    LOCAL_API_URL: 'http://localhost:8787',
    PRODUCTION_API_URL: 'https://top-sheet-generator-config-api.services1-sc.workers.dev',
}

export function setAuthToken(token) {
    // save token to local storage
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, token);
}

export function getAuthToken() {
    // if (window === undefined) return false;

    // get token from local storage and check if it exists
    const token = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
    if (token) {
        return token;
    }
    return false;
}

export function removeAuthToken() {
    // remove token from local storage
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_KEY);
}

export function isAdminLoggedIn() {
    // return true;
    // check if token exists
    const token = getAuthToken();
    if (!token) {
        return false;
    }

    return true;
}

export function logoutAdmin() {
    if (confirm('Are you sure you want to logout?') === false) {
        return;
    }

    console.log('logging out admin');

    // remove token from local storage
    removeAuthToken();

    // redirect to login page
    useRouter().replace('/experimental/admin/login');
}


export async function loginUser(username, password) {

    let API = (process.env.NODE_ENV === 'development') ? CONSTANTS.LOCAL_API_URL : CONSTANTS.PRODUCTION_API_URL;

    API = API + '/admin/login';

    const res = await fetch('http://localhost:3000/api/experimental/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    console.log('data', data);
    return data;
    return { success: true, token: '123456' };

}