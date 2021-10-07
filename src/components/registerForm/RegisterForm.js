import React from 'react';
import { Form, LabelArea } from './styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RegisterForm = () => {
    return (
        <Form>
            <LabelArea style={{'margin-top': '50px'}}>Full Name:</LabelArea>
            <TextField id="outlined-basic" label="Full Name" placeholder="Bruno Domingues" type="email" variant="outlined" style={{'margin-top': '10px', 'margin-bottom': '10px', 'background-color': 'white'}} />
            <LabelArea>E-mail:</LabelArea>
            <TextField id="outlined-basic" label="E-mail" placeholder="email@email.com" type="email" variant="outlined" style={{'margin-top': '10px', 'margin-bottom': '10px', 'background-color': 'white'}} />
            <LabelArea>Password:</LabelArea>
            <TextField id="outlined-basic" label="Password" placeholder="" type="password" variant="outlined" style={{'margin-top': '10px', 'margin-bottom': '10px', 'background-color': 'white'}} />
            <LabelArea>Password Again:</LabelArea>
            <TextField id="outlined-basic" label="Password Again" placeholder="" type="password" variant="outlined" style={{'margin-top': '10px', 'margin-bottom': '10px', 'background-color': 'white'}} />
            <Button variant="contained" style={{'margin-top': '20px', 'width': '223px', 'height': '45px'}}>Confirm Registration</Button>
            <Button variant="contained" style={{'margin-top': '20px', 'width': '223px', 'background-color': 'gray'}}>Cancel</Button>
        </Form>
    )
}

export default RegisterForm;