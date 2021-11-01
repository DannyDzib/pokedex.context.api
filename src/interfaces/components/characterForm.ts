import { ICharacter } from '../redux/home/state';
export interface ICharacterFormProps {
    character: ICharacter,
    isEdit: boolean,
    editCharacter: Function,
    addCharacter: Function
}