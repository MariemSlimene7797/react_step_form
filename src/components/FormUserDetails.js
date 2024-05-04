import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Button} from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';

export class FormUserDetails extends Component {
   continue = e =>{
    e.preventDefault();
    this.props.nextStep();
   };
    render() {
        const {values,handleChange}=this.props;
        
    return (
    <MuiThemeProvider>
        
       
          
    
   
        <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enter your info
          </Typography>
          </AppBar>
         
          <TextField id="standard-basic" label="First Name" variant="standard" 
         
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          />
          
          <br/>
          <TextField id="standard-basic" label="Last Name" variant="standard" 
          
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          />
          
          <br/>
          <TextField id="standard-basic" label="Email" variant="standard" 
          onChange={handleChange('email')}
          defaultValue={values.email}
          />
          
          <br/>
          <br/>
          

          <Button disabled={false} variant="contained"
          onClick={this.continue}>Continue</Button>

</MuiThemeProvider>
  
    )
  }
}

export default FormUserDetails;
