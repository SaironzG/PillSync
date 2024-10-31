import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e6f2ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h2`
  color: #4a90e2;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // Call the onLogin function to update the login state
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Header>Login to PillSync</Header>
        <TextField label="Email Address" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
