import moment from 'moment'
import 'moment/locale/es-mx';

export const formatDate = (date: Date = new Date()) => {
    const dateFormatting = moment(date).locale('es-mx').format('LL');
    return dateFormatting
}
