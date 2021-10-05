import React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <>
            <TextField id="outlined-basic" label="E-Mail" placeholder="email@email.com" type="email" variant="outlined" style={{'margin-top': '30px', 'margin-bottom': '10px', 'background-color': 'white'}} />
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" style={{'background-color': 'white'}} />
        </>
    );
  }