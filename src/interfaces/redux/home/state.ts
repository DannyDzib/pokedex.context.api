export interface IHomeState {
    loading: boolean,
    characters?: ICharacter[],
    character?: object
}

export interface ICharacter {
    id?: number
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
    image?: string,
    url?: string,
    created?: Date,
    origin?: object,
    location?: object,
    episode?: object[],
}