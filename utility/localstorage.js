const getLocalStorageData = (key = "allPdfs", parseData = true) => {
    let jsonString = localStorage.getItem(key);
    if (jsonString == null) return [];
    if (parseData == false) return jsonString;
    try {
        let parsedData = JSON.parse(jsonString);
        return parsedData;
    } catch (error) {
        return [];
    }
}

export default getLocalStorageData;