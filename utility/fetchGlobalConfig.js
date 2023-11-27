import { isLocalEnvironment } from "./localEnvironment";

const fetchGlobalConfig = async () => {
    let API = isLocalEnvironment() ? 'http://localhost:8787' : 'http://localhost:8787';
    API += '/config';

    try {
        const response = await fetch(API);
        const result = await response.json();

        if(result.status !== 'success' || result.data === undefined) {
            return false;
        }

        return result.data;

    } catch (error) {
        console.log('error', error);
        return false;
    }

};
export default fetchGlobalConfig;