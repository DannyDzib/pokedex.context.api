import _ from 'lodash'
const reducersName = 'home'

export const getCharactersSelector = (state: any) => {
    return _.get(state[reducersName], 'characters', [])
};

export const getCharacterItemSelector = (state: any) => {
    return _.get(state[reducersName], 'character', {})
};

export const isLoading = (state: any) => state[reducersName].loading
