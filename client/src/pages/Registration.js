import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Registration = () => {

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSubmit = () => {
    const userData = {
      firstName,
      lastName
    }
    // axios.post('https://rainbow-river-4709.herokuapp.com/register')
    axios.post('http://localhost:3001/register', userData)
      .then( res => {
        console.log('Registration res.data is ', res.data)
      })
  }

  return (
    <Box>
      <Container>
        <Grid container>

          <Grid container style={{marginTop: '2rem'}}>
            <Typography variant='h4'>
              Registration Form
            </Typography>
          </Grid>

          <Grid container style={{marginTop: '2rem'}}>
            <Grid item xs={3}>
              <TextField label='First Name' value={firstName} variant='outlined' onChange={handleFirstNameChange} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={3}>
              <TextField label='Last Name' value={lastName} variant='outlined' onChange={handleLastNameChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '2rem'}}>
            <Grid item xs={3}>
              <Button color='primary' variant='contained' onClick={handleSubmit} >Submit</Button>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Registration
