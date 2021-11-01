import * as types from './types';
import { IHomeState } from '@interfaces/redux/home/state'
import _ from 'lodash';

const homeState: IHomeState = {
    loading: false,
    characters: [],
    character: {}
}

const homeReducer = (state: IHomeState = homeState, action: any): IHomeState => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true
            }
        case types.GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: _.orderBy(_.uniqBy([...state.characters ?? [], ...action.payload], 'id'), ['id']),
            }
        case types.GET_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                character: action.payload,
            }
        case types.GET_CHARACTER_LOCAL_SUCCESS:
            return {
                ...state,
                loading: false,
                character: _.filter(state.characters, (character) => character.id == action.payload)[0],
            }
        case types.EDIT_CHARACTER_SUCCES:
            return {
                ...state,
                loading: false,
                characters: [..._.filter(state.characters, (character) => character.id !== action.payload.id), action.payload],
            }
        case types.ADD_CHARACTER_SUCCES:
            return {
                ...state,
                loading: false,
                characters: [...state.characters ?? [], action.payload],
            }
        case types.DELETE_CHARACTER_SUCCES:
            return {
                ...state,
                characters: _.filter(state.characters, (character) => character.id !== action.payload),
            };
        default:
            return {
                ...state
            }
    }
}

export default homeReducer