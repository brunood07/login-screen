import React from 'react';
import { Screen, Container } from './styles';
import Input from '../input/Input'
import Button from '../button/Button';


const LoginContainer = () => {
    return(
        <Container>
            <Screen>
                <Input />
                <Button />
            </Screen>
        </Container>
    )
}

export default LoginContainer;