import { DevEnviroment as Enviroment } from './dev.env';

class ApiSettings {
    API_URL: string;
    ENDPOINT_CHARACTERS: string;
    constructor() {
        this.API_URL = Enviroment.apiUrl;
        //Characters
        this.ENDPOINT_CHARACTERS =
            this.API_URL + Enviroment.endpoint.characters;
    }
}
export default new ApiSettings();
