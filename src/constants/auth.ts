export const officialAPIEndpoint = 'https://00.kfc.lat/ato';
const customAPIEndpoint1 = import.meta.env.VITE_CUSTOM_API_ENDPOINT_1 || 'https://00.kfc.lat/omg';
const customAPIEndpoint4 = import.meta.env.VITE_CUSTOM_API_ENDPOINT_4 || 'https://00.kfc.lat/3p';
export const defaultAPIEndpoint = import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint4, customAPIEndpoint1];
