import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Registration = () => {

  const [ address1, setAddress1 ] = useState('')
  const [ address2, setAddress2 ] = useState('')
  const [ city, setCity ] = useState('')
  const [ country, setCountry ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ usState, setUsState ] = useState('')
  const [ zip, setZip ] = useState('')

  const handleAddress1Change = (e) => {
    setAddress1(e.target.value)
  }

  const handleAddress2Change = (e) => {
    setAddress2(e.target.value)
  }
  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  const handleUsStateChange = (e) => {
    setUsState(e.target.value)
  }

  const handleZipChange = (e) => {
    setZip(e.target.value)
  }

  const handleSubmit = () => {
    const userData = {
      firstName,
      lastName
    }

    axios.post('https://rainbow-river-4709.herokuapp.com/register', userData)
    // axios.post('http://localhost:3001/register', userData)
      .then( res => {
        console.log('Registration register POST res.data is ', res.data)
      })
    
    axios.get('https://rainbow-river-4709.herokuapp.com/adminReport')
    // axios.get('http://localhost:3001/adminReport')
      .then( res => {
        console.log('Registration adminReport GET res.data is ', res.data)
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

          <Grid container style={{marginTop: '1rem'}}>
            <Grid item xs={4}>
              <TextField label='Address 1' value={address1} variant='outlined' onChange={handleAddress1Change} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={4}>
              <TextField label='Address 2' value={address2} variant='outlined' onChange={handleAddress2Change} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '1rem'}}>
            <Grid item xs={3}>
              <TextField label='City' value={city} variant='outlined' onChange={handleCityChange} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={2}>
              <TextField label='State' value={usState} variant='outlined' onChange={handleUsStateChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
            <Grid item xs={3}>
              <TextField label='Zip Code 12345 or 12345-1234' value={zip} variant='outlined' onChange={handleAddress1Change} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
            <Grid item xs={2}>
              <TextField label='Country' value={country} variant='outlined' onChange={handleCountryChange} style={{width: '100%', marginLeft: '0.5rem'}} />
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
