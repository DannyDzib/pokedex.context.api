import React from 'react';
import { ICharacterCardProps } from '@interfaces/components/ICharacterCard';
import { formatDate } from '@utils/index'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Badge, Menu, MenuItem, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import sx from './styles'

const CharacterCard: React.FC<ICharacterCardProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { id, name, status, species, gender, image, created } = props.item
    const history = useHistory();
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const textSubHeader = (text: string) => (
        <Typography variant="caption" component='p' color="text.secondary">
            {text}
        </Typography>
    )
    const subHeader = (
        <>
            {textSubHeader(`${formatDate(created)}`)}
            {textSubHeader(`${status} - ${species} - ${gender}`)}
        </>
    )

    const options = [
        {
            text: 'Edit',
            icon: <EditIcon />,
            onPress: () => history.push(`/character/${id}`)
        },
        {
            text: 'Delete',
            icon: <DeleteIcon />,
            onPress: () => props.handleDelete(id)
        }
    ];
    return (
        <Card sx={sx.root}>
            <CardHeader
                avatar={
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        color={status === "Alive" ? "warning" : "error"}
                        sx={sx.badge}
                    >
                        <Avatar alt={name} src={image} sx={sx.image} />
                    </Badge>
                }
                action={
                    <IconButton
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={subHeader}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                sx={sx.menu}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={option.onPress}>
                        {option.icon}
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </Card >
    );
}

export default CharacterCard;
