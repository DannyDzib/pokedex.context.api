import React, { useEffect, useState } from 'react';
import { ICharacterAddEditProps } from '@interfaces/screens/characterAddEdit';
import { ICharacter } from '@interfaces/redux/home/state';
import CharacterForm from '@components/Forms/CharacterForm';
import useNewCharacter from '@hooks/useNewCharacter';
import * as homeSelectors from '@redux/home/selectors';
import { getCharacterByIdAPI, getCharacterById } from '@redux/home/actions';
import { Container } from '@mui/material';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const CharacterAddEdit: React.FC<ICharacterAddEditProps> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const { character, characters, getCharacterAPI, getCharacterLocal } = props
    const newCharacter = useNewCharacter(characters)
    const params = useParams<any>();

    useEffect(() => {
        setIsEdit(params.id ? true : false)
        if (isEdit)
            // getCharacterAPI(params.id) // get Character API
            getCharacterLocal(params.id) // get Character state of redux
    }, [isEdit])

    const data: ICharacter | any = isEdit ? character : newCharacter
    return (
        <Container maxWidth="sm">
            <CharacterForm character={data} isEdit={isEdit} />
        </Container >
    );
};

const mapStateToProps = (state: object) => ({
    character: homeSelectors.getCharacterItemSelector(state),
    characters: homeSelectors.getCharactersSelector(state),
})

const mapDispatchToProps = (dispatch: Function) => ({
    getCharacterAPI: (id: number) => dispatch(getCharacterByIdAPI(id)),
    getCharacterLocal: (id: number) => dispatch(getCharacterById(id)),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterAddEdit)
