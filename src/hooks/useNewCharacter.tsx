import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const useNewCharacter: React.FC<any> = (characters): any => {
    const [id, setId] = useState<number>(1)
    const character = _.maxBy<any>(characters, 'id')

    useEffect(() => {
        if (character) setId(character.id + 1)
    }, [characters])

    return { id, created: new Date() }
}

export default useNewCharacter
