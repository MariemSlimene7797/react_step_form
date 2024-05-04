import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Button} from '@mui/material';
import { AppBar,Typography } from '@mui/material';
import { TextField } from '@mui/material';
export class FormPersonalDetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
       }
       previous=e=>{
        e.preventDefault();
        this.props.prevStep();
       }
        render() {
            const {values,handleChange}=this.props;
            
        return (
          
          <MuiThemeProvider>
            <React.Fragment>
            <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enter your info
          </Typography>
          </AppBar>
              <TextField id="standard-basic" label="Occupation" variant="standard" 
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          />
          
          <br/>
          <TextField id="standard-basic" label="City" variant="standard" 
          onChange={handleChange('city')}
          defaultValue={values.city}
          />
          
         
              
              <br/>
              <TextField id="standard-basic" label="Bio" variant="standard" 
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              />
              
              <br/>
              <br/>
              <Button disabled={false} variant="outlined"
              onClick={this.previous}>Previous</Button>
              
    
    <Button disabled={false} variant="contained"
    onClick={this.continue} color="primary">Continue</Button>
    
    
    
    
            </React.Fragment>
        
        </MuiThemeProvider>
        )
}
}
export default FormPersonalDetails
