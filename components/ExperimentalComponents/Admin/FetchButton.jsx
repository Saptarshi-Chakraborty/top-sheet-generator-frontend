import { useContext, useState } from 'react';
import { ConfigContext } from './ConfigProvider';
import { isLocalEnvironment } from '../../../utility/localEnvironment';
import { toast } from 'react-toastify';
import { removeAuthToken } from './AdminAuth';


const FetchButton = () => {
    const { config, setConfig } = useContext(ConfigContext);
    const [isLoading, setisLoading] = useState(false);

    const fetchData = async () => {
        setisLoading(true);

        let API = isLocalEnvironment() ? 'http://localhost:8787' : 'http://localhost:8787';
        let url = `${API}/config`;

        let result;

        try {
            const response = await fetch(url);
            result = await response.text();
        } catch (error) {
            console.log(error);
            toast.error('Error in Fetching Data');
            return;
        }

        console.log('fetchData result');

        try {
            result = await JSON.parse(result);
        } catch (error) {
            console.log(result);
            toast.error('Malformed Data Fetched');
            console.log(`error :`);
            console.log(error);
            return;
        }
        console.log(result);

        const { status } = result;

        if (status !== 'success') {
            if (result.type === "authentication-error") {
                removeAuthToken();
                window.location.href = '/experimental/admin/login';
            }
            else
                toast.error('Error in Fetching Data');
            return;
        }

        console.log('fetchData result.data');
        const data = result.data;
        console.log(data);

        localStorage.setItem('oldConfig', JSON.stringify(data));
        setConfig({ ...config, data, hasFetched: true, timestamp: new Date() });
        setisLoading(false);

        console.log('fetchData setConfig completed');
        console.log(config);
    }


    return (
        (isLoading) ?
            <button className="btn btn-primary" onClick={() => { }} >
                <span>Loading &nbsp;</span>
                <div className="spinner-border spinner-border-sm text-light small" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </button>
            :
            <button onClick={fetchData} className={`btn btn-${config.hasFetched ? 'primary' : 'warning'}`} >
                {config.hasFetched ? 'Refetch' : 'Fetch'} Data
            </button>
    )
}

export default FetchButton