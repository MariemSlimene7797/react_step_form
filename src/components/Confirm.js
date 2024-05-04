import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Button,Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
       }
       previous=e=>{
        e.preventDefault();
        this.props.prevStep();
       }
        render() {
            const {values:{firstName,lastName,email,occupation,city,bio}}=this.props;
            
        return (
          
          <MuiThemeProvider>
            <React.Fragment>
            <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Confirm your info
          </Typography>
          </AppBar>
              <List >
                <ListItem >
                  <ListItemText
                    primary="First Name"
                    secondary={firstName}
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="Last Name"
                    secondary={lastName}
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="Email"
                    secondary={email}
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="Occupation"
                    secondary={occupation}
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="City"
                    secondary={city}
                  />
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText
                    primary="Bio"
                    secondary={bio}
                  />
                </ListItem>
              
              
            </List>
              
              <br/>
              <br/>
              <Button disabled={false} variant="outlined"
              onClick={this.previous}>Previous</Button>
              
    
    <Button disabled={false} variant="contained"
    onClick={this.continue} color="primary"> Confirm & Continue</Button>
    
    
    
    
            </React.Fragment>
        
        </MuiThemeProvider>
        )
}
}

export default Confirm
