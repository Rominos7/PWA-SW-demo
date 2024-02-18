/**
 * This method will get data from network
 * @param {String} url url for data request
 * @returns 
 */
export const getDataFromNetwork = async (url) => {
    const dataFromNetwork = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
        }
    });

    const resultData = await dataFromNetwork.json();

    return resultData;
}
