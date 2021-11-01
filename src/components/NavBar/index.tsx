import React from 'react';
import { HOME_TITLE } from '../../constants/home';
import AppBar from '@mui/material/AppBar';
import * as homeSelectors from '@redux/home/selectors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { connect } from 'react-redux';

const NavBar = (props: any) => {
    return (
        <>
            <AppBar color='secondary' >
                <Toolbar>
                    <Typography variant="h6" component="h1">
                        {HOME_TITLE}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {props.isLoading && <LinearProgress />}
        </>
    );
}

const mapStateToProps = (state: object) => ({
    isLoading: homeSelectors.isLoading(state)
});
export default connect(mapStateToProps)(NavBar);