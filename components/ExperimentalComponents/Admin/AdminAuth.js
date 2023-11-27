import { useRouter } from "next/router";

const CONSTANTS = {
    ADMIN_TOKEN_NAME: 'AdminToken',
    LOCAL_STORAGE_KEY: 'AdminToken',
    LOCAL_API_URL: 'http://localhost:8787',
    PRODUCTION_API_URL: 'https://top-sheet-generator-config-api.services1-sc.workers.dev',
}

export function storeAuthToken(token) {
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
    const router = useRouter();
    router.push('/experimental/admin/login');
}

export async function loginAdmin(username, password) {
    try {
        console.log('-'.repeat(50));
        let API = (process.env.NODE_ENV === 'development') ? CONSTANTS.LOCAL_API_URL : CONSTANTS.PRODUCTION_API_URL;

        API = API + '/admin/login';

        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const params = {
            method: 'POST',
            body: formData,
        };

        const resp = await fetch(API, params).then(res => res.json());
        console.log(resp);

        const { status, msg, token } = resp;

        if (status === 'success') {
            storeAuthToken(token);
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return false;
    }

}