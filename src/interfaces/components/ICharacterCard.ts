import { ICharacter } from '../redux/home/state';
export interface ICharacterCardProps {
    item: ICharacter,
    handleDelete: Function,
}