import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import love4uglies from './images/cuteduck.jpeg';

const App = () => {
    return(
                <Container maxWidth="lg">
                    <AppBar position="static" color="inherit">
                        <Typography variant="h2" align="center">LoveForUglies</Typography>
                        <img src ={love4uglies} alt="love4uglies" height="60"/>

                    </AppBar>
               </Container>
    );
}

export default App;


