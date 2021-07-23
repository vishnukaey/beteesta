import { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'


function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Beteesta
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

export default function SignUp() {
    const classes = useStyles()
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [dName, setDName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [phone, setPhone] = useState('');

    const onChange = (event) => {
        switch (event.target.id) {
            case 'firstName':
                setFName(event.target.value)
                break;
            case 'lastName':
                setLName(event.target.value)
                break;
            case 'displayName':
                setDName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            case 'cpassword':
                setCpassword(event.target.value)
                break;
            case 'phone':
                setPhone(event.target.value)
                break;
            default:
        }
    }

    const validate = (text, id) => {
        switch (id) {
            case 'firstName':
                return !(text.length > 0)
            case 'lastName':
                return !(text.length > 0)
            case 'displayName':
                return !(text.length > 0)
            case 'email':
                return !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(text))
            case 'password':
                return !(text.length > 5)
            case 'cpassword':
                return !((text.length > 0 && text === password))
            case 'phone':
                return !(text.length > 0)
            default:
                return false
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={validate(fName, 'firstName')}
                                onChange={onChange}
                                autoComplete='fname'
                                name='firstName'
                                variant='outlined'
                                required
                                fullWidth
                                id='firstName'
                                label='First Name'
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={validate(lName, 'lastName')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                id='lastName'
                                label='Last Name'
                                name='lastName'
                                autoComplete='lname'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={validate(dName, 'displayName')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                id='displayName'
                                label='Display Name'
                                name='displayName'
                                autoComplete='displayName'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={validate(email, 'email')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={validate(password, 'password')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                            // autoComplete='current-password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={validate(cpassword, 'cpassword')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                name='cpassword'
                                label='Confirm Password'
                                type='cpassword'
                                id='cpassword'
                            // autoComplete='current-password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={validate(phone, 'phone')}
                                onChange={onChange}
                                variant='outlined'
                                required
                                fullWidth
                                name='Phone Number'
                                label='Phone Number'
                                id='phone'
                                autoComplete='phone'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value='allowExtraEmails' color='primary' />}
                                label='I want to receive inspiration and updates'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Link href='/login' variant='body2'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
