const getLocalStorageData = (key = "", parseData = false) => {
    let jsonString = localStorage.getItem(key);
    if (jsonString == null) return [];
    try {
        let parsedData = JSON.parse(jsonString);
        return parsedData;
    } catch (error) {
        return [];
    }
}

export default getLocalStorageData;