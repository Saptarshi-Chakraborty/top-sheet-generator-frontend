import { useContext } from 'react'
import { ConfigContext } from './ConfigProvider';
import styles from './CustomStyle.module.css'


// Custom Toggle Switch Button
export const ExperimentalToggleButton = ({ fieldName, title }) => {
    const { config, setConfig } = useContext(ConfigContext);

    const handleChange = (e) => {
        // console.log(`${e.target.name} : ${e.target.checked}`); // DEBUG

        // update the config
        setConfig({
            ...config,
            data: {
                ...config.data,
                [fieldName]: e.target.checked
            }
        })
    }

    return (
        // Rounded switch
        <div className='d-flex justify-content-start align-items-center'>
            <span className='fs-5 fw-bold'>{title} : &nbsp;</span>
            <label className={styles.switch} >
                <input type="checkbox" onClick={handleChange} onChange={() => { }} checked={config.data[fieldName]} />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}

