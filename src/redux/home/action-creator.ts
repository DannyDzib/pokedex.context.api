import HttpClient from '@config/httpClient';
import ApiSettings from '@settings/api.settings';

export const getApiCharactersApi = async () => {
    const response = await HttpClient.get(ApiSettings.ENDPOINT_CHARACTERS)
    if (response.data) return await response.data
    else return {}
};

export const getApiCharactersById = async (id: number) => {
    const response = await HttpClient.get(ApiSettings.ENDPOINT_CHARACTERS + '/' + id)
    if (response.data) return await response.data
    else return {}
};