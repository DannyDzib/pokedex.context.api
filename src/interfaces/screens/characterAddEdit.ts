import { ICharacter } from '../redux/home/state';
export interface ICharacterAddEditProps {
    character: ICharacter,
    characters: ICharacter[],
    getCharacterAPI: Function,
    getCharacterLocal: Function
}