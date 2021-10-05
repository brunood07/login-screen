import React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButtons() {
    return (
        <>
            <Button variant="contained" style={{'margin-top': '20px', 'width': '223px'}}>Log-In</Button>
            <Button variant="contained" style={{'margin-top': '20px', 'width': '223px'}}>Register</Button>
        </>
    );
  }