import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {AppBar,Typography} from '@mui/material';
export class Success extends Component {
  render() {
    return (
     
         <MuiThemeProvider>
            <React.Fragment>
            <AppBar position="static">
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Success
          </Typography>
          
          </AppBar>
          <h1>Thank you for providing your info</h1>
          <p>You will receive an email shortly </p>
              
           
              
             
            
            </React.Fragment>
            </MuiThemeProvider>
    
        
  
    )
  }
}

export default Success;
