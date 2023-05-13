export const officialAPIEndpoint = 'https://api-oai.iii.hair/kamiya/v1/chat/completions';
const customAPIEndpoint1 =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT_1 || 'https://api-oai.iii.hair/churchless/v1/chat/completions';
const customAPIEndpoint2 =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT_2 || 'https://api-oai.iii.hair/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint1, customAPIEndpoint2];
