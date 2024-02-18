export const DATA_COMPONENT_LABEL = 'Types of data caching strategies';

export const REQUEST_BASE_URL = 'https://swapi.dev/api/people';

export const CACHE_ONLY = 'Cache only';
export const NETWORK_ONLY = 'Network only';
export const CACHE_FIRST = 'Cache first';
export const NETWORK_FIRST = 'Network first';
export const STALE_WHILE_REVALIDATE = 'State while revalidate';

export const urlHashMap = {
    [CACHE_ONLY]: `${REQUEST_BASE_URL}/1`,
    [NETWORK_ONLY]: `${REQUEST_BASE_URL}/2`,
    [CACHE_FIRST]: `${REQUEST_BASE_URL}/3`,
    [NETWORK_FIRST]: `${REQUEST_BASE_URL}/4`,
    [STALE_WHILE_REVALIDATE]: `${REQUEST_BASE_URL}/5`,
}
