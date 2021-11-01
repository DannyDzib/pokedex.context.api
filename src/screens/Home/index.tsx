import React, { useEffect, useState } from 'react';
import IHomeProps from '@interfaces/screens/homeProps'
import CharacterCard from '@components/CharacterCard';
import ModalDelete from '@components/ModalDelete';
import * as constants from '@constants/home';
import * as homeSelectors from '@redux/home/selectors';
import { getCharacters, deleteCharacter } from '@redux/home/actions';
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import sx from './styles'
const HomePage: React.FC<IHomeProps> = props => {
    const [open, setOpen] = useState<boolean>(false);
    const [characterId, setCharacterId] = useState<number>(0)
    const history = useHistory();

    useEffect(() => {
        props.getCharacters()
    }, [])
    const handleClose = () => {
        setOpen(!open)
    }
    const handleShowModal = (id: number) => {
        setCharacterId(id)
        handleClose()
    }
    const handleDelete = () => {
        if (characterId > 0) props.deleteCharacter(characterId)
        handleClose()
    }
    const redirectToCharacter = () => {
        history.push(`/character`);
    }
    return (
        <Container maxWidth="lg">
            <Button sx={sx.buttonAdd} startIcon={<AddCircleIcon />} onClick={() => redirectToCharacter()}>
                ADD new Character
            </Button>
            <Grid container spacing={3}>
                {props.characters.map((character: any, index: number) => (
                    <Grid item xs={12} md={4} key={index}>
                        <CharacterCard
                            item={character}
                            handleDelete={handleShowModal}
                        />
                    </Grid>
                ))}
                <ModalDelete
                    title={constants.HOME_MODAL_DELETE}
                    open={open}
                    handleClose={handleClose}
                    handleClick={handleDelete}
                />
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state: object) => ({
    characters: homeSelectors.getCharactersSelector(state),
    isLoading: homeSelectors.isLoading(state)
});

const mapDispatchToProps = (dispatch: Function) => ({
    getCharacters: () => dispatch(getCharacters()),
    deleteCharacter: (id: number) => dispatch(deleteCharacter(id)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);