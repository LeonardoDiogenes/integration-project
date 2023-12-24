import styles from '../css-modules/Login.module.css';
import { TextField, Button } from '@mui/material';

function Login() {
  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <form className={ styles.loginForm }>
        <TextField id="outlined-basic" label="E-mail:" variant="standard"/>

        <TextField id="outlined-basic" label="Password:" variant="standard" />

        <Button variant="outlined"
        sx={{ marginBottom: '2rem' }}
        >Outlined</Button>
      </form>
    </div>
  );
}

export default Login;
