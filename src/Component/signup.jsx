import React from 'react';
import { useState } from 'react';
import {
  Button,
  Paper,
  TextField,
  Grid,
  Avatar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    userNameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      setUserName({ ...errors, userNameError: false });
      console.log('error', errors);
    }
  };

  const paperStyle = {
    height: '85vh',
    width: '300px',
    margin: '50px 0 0 500px',
  };
  const avatarStyle = { backgroundColor: '#8D2461', color: 'white' };
  const btnStyle = {
    width: '80%',
    color: 'white',
    backgroundColor: '#8D2461',
    marginTop: '30px',
  };
  const makestyle = { marginTop: '20px' };
  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          style={paperStyle}
        >
          <Grid
            align='center'
            paddingTop='20px'
          >
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Signup</h2>
          </Grid>
          <Grid paddingTop='30px'>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Username'
                placeholder='Enter Username'
                size='small'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => setErrors({ ...errors, userNameError: false })}
              />
              {errors.userName && (
                <span className='error'>User name is missing</span>
              )}
              <TextField
                label='Email'
                placeholder='test@test.com'
                size='small'
                type='email'
                style={makestyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Password'
                placeholder='Enter password'
                type='password'
                size='small'
                style={makestyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label='Confirm Password'
                placeholder='Repeat password'
                type='password'
                size='small'
                style={makestyle}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type='submit'
                style={btnStyle}
              >
                Sign Up
              </Button>
              <Typography>
                if you have already account?
                <Link
                  to='/loginform'
                  style={{ cursor: 'pointer' }}
                >
                  login
                </Link>
              </Typography>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;
