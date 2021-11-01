export default interface IHomeProps {
    isLoading: boolean,
    characters: object[],
    getCharacters: Function,
    deleteCharacter: Function,
}