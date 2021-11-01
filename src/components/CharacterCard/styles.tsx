
const styles = {
    root: { maxWidth: 345 },
    image: {
        width: 60,
        height: 60,
        borderRadius: '50%'
    },
    menu: {
        '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: '#757575',
            marginRight: 2,
        }
    },
    badge: {
        '& .MuiBadge-badge': {
            width: 12,
            height: 12,
            borderRadius: '50%',
            boxShadow: `0 0 0 3px #fff`,
        }
    },
}

export default styles