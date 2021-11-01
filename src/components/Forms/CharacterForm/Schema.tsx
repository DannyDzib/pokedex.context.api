import * as Yup from 'yup'

const CharacterSchema = Yup.object().shape({
    name: Yup.string().required('Requerido'),
    status: Yup.string().required('Requerido'),
    species: Yup.string().required('Requerido'),
    gender: Yup.string().required('Requerido'),
    // image: Yup.string().required('Requerido'),
})

export default CharacterSchema
