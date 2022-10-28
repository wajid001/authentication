import React from 'react';
// import { makeStyles } from '@mui/styles';
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
const Login = () => {
  const paperStyle = {
    height: '70vh',
    width: '300px',
    margin: '50px 0 0 500px',
  };
  const avatarStyle = { backgroundColor: '#8D2461', color: 'white' };
  const btnStyle = {
    width: '80%',
    color: 'white',
    backgroundColor: '#8D2461',
    marginTop: '50px',
  };
  const makeStyle = { marginTop: '20px' };

  return (
    <div>
      <form>
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
              <h2>Login</h2>
            </Grid>
            <Grid paddingTop='50px'>
              <TextField
                label='Username'
                placeholder='Enter Username'
                size='small'
                onChange={(e) => console.log(e)}
              />
              <TextField
                label='Password'
                placeholder='Enter password'
                type='password'
                size='small'
                style={makeStyle}
                onChange={(e) => console.log(e)}
              />
              <Button
                type='submit'
                style={btnStyle}
              >
                Login
              </Button>
              <Typography>
                Not a member?
                <Link
                  to='/singup'
                  underline='hover'
                  style={{ cursor: 'default' }}
                >
                  SignUp
                </Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  );
};
export default Login;
