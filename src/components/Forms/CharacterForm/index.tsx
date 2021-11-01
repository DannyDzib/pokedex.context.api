import React, { useEffect, useState } from 'react';
import { ICharacterFormProps } from '@interfaces/components/characterForm';
import { ICharacter } from '@interfaces/redux/home/state';
import CharacterSchema from './Schema';
import { formatDate } from '@utils/index';
import { addCharacter, editCharacter } from '@redux/home/actions';
import { Avatar, Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import sx from './styles'

const CharacterForm: React.FC<ICharacterFormProps> = (props) => {
    const [initialValues, setInitialValues] = useState<ICharacter>({})
    const { character, isEdit, editCharacter, addCharacter } = props
    const history = useHistory();

    useEffect(() => {
        setInitialValues(character)
    }, [character, isEdit])

    const handleSubmit = (values: ICharacter) => {
        if (isEdit) editCharacter(values)
        else addCharacter(values)
        history.push(`/`)
    }
    return (
        <Formik
            enableReinitialize
            validationSchema={CharacterSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => handleSubmit(values)}
        >
            {({
                values, errors, touched, handleChange, handleSubmit, setFieldTouched,
            }) => (
                Object.keys(values).length &&
                <Grid container spacing={1} component="form" onSubmit={handleSubmit} >
                    <Grid item xs={12} sx={sx.contentAvatar} m={4} >
                        <Avatar alt={values.name} src={values.image} sx={sx.avatar} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange('name')}
                            onBlur={() => setFieldTouched('name')}
                            helperText={touched.name && errors.name}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="status"
                            name="status"
                            value={values.status}
                            onChange={handleChange('status')}
                            onBlur={() => setFieldTouched('status')}
                            helperText={touched.status && errors.status}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Species"
                            name="species"
                            value={values.species}
                            onChange={handleChange('species')}
                            onBlur={() => setFieldTouched('species')}
                            helperText={touched.species && errors.species}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Gender"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange('gender')}
                            onBlur={() => setFieldTouched('gender')}
                            helperText={touched.gender && errors.gender}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            required
                            disabled
                            label="created"
                            name="created"
                            value={formatDate(values.created)}
                        />
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <Button variant="contained" type="submit" sx={sx.buttons}>
                            Save
                        </Button>
                        <Button variant="outlined" sx={sx.buttons} onClick={() => history.push(`/`)}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Formik >
    )
}

const mapStateToProps = (state: object) => ({})

const mapDispatchToProps = (dispatch: Function) => ({
    editCharacter: (character: ICharacter) => dispatch(editCharacter(character)),
    addCharacter: (character: ICharacter) => dispatch(addCharacter(character)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterForm);