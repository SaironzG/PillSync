import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const RegistrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const Header = styled.h2`
  color: #4a90e2;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Register = () => {
  return (
    <RegistrationContainer>
      <Header>Sign up as a student</Header>
      <Form>
        <TextField label="First Name" variant="outlined" margin="normal" fullWidth />
        <TextField label="Last Name" variant="outlined" margin="normal" fullWidth />
        <TextField label="School Email Address" variant="outlined" margin="normal" fullWidth />
        <TextField label="Course Code" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth>
          Continue
        </Button>
      </Form>
    </RegistrationContainer>
  );
};

export default Register;
