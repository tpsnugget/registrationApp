import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Confirmation from './Confirmation'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Registration = () => {

  /* Form field state */
  const [ address1, setAddress1 ] = useState('')
  const [ address2, setAddress2 ] = useState('')
  const [ city, setCity ] = useState('')
  const [ country, setCountry ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ usState, setUsState ] = useState('')
  const [ zip, setZip ] = useState('')

  /* Handle data returned from MongoDB Database */
  const [ dbError, setDbError ] = useState('')
  const [ userFromDB, setUserFromDB ] = useState({})

  /* Logic to handle page routing since there are only 3 pages */
  const [ showAdminReport, setShowAdminReport ] = useState(false)
  const [ showConfirmation, setShowConfirmation ] = useState(false)
  const [ showRegistration, setShowRegistration ] = useState(true)

  /* State for display of Submit button */
  const [ showSubmitButton, setShowSubmitButton ] = useState(false)

  /* Form onChange Hanlders */
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

  /* Routing handler functions */
  const handleConfirmationRouting = () => {
    setShowConfirmation(false)
    setShowRegistration(true)
  }

  const handleShowAdminReport = () => {
    setShowAdminReport(true)
  }

  /* Submit Form on Button click */
  const handleSubmit = () => {
    const userData = {
      address1,
      address2,
      city,
      country,
      firstName,
      lastName,
      usState,
      zip
    }

    // axios.post('https://rainbow-river-4709.herokuapp.com/register', userData)
    axios.post('http://localhost:3001/register', userData)
      .then( res => {
        if (res.data.msg === 'Success') {
          setAddress1('')
          setAddress2('')
          setCity('')
          setCountry('')
          setFirstName('')
          setLastName('')
          setUsState('')
          setZip('')
          setUserFromDB(res.data.newUser)
        } else {
          if (res.data.msg === 'Error') {
            setDbError(res.data.msg)
          } else {
            setDbError('Server validation error')
          }
        }
        setShowRegistration(false)
        setShowConfirmation(true)
      })
  }

  /* Control display of Submit button via Form validation logic */
  useEffect( () => {
    if (
      isAlphaNum(address1) &&
      isString(city) &&
      isString(country) &&
      (country === 'US') &&
      isString(firstName) &&
      isString(lastName) &&
      isState(usState) &&
      isZip(zip)
      ) {
      setShowSubmitButton(true)
    } else {
      setShowSubmitButton(false)
    }
  }, [address1, address2, firstName, lastName, city, usState, zip, country] )

  /* Helper function to determine if all chars in a string are A - Z or a - z */
  const isString = (str) => {
    if (str.length === 0) return false
    for (let i = 0; i < str.length; i++) {
      if (!((str.charCodeAt(i) > 64 &&str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) || (str.charCodeAt(i) === 32))) {
        return false
      }
    }
    return true
  }

  /* Helper function to determine if all chars in a string are A - Z or a - z or 0 - 9 */
  const isAlphaNum = (str) => {
    if (str.length === 0) return false
    for (let i = 0; i < str.length; i++) {
      if (!((str.charCodeAt(i) > 64 &&str.charCodeAt(i) < 91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) || (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || (str.charCodeAt(i) === 32))) {
        return false
      }
    }
    return true
  }

  /* Helper function to determine if all charsin a string are 0 - 9 or the symbol - */
  const isZip = (str) => {
    if (str.length === 0) return false
    if (str.length === 5) {
      for (let i = 0; i < str.length; i++) {
        if (!((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58))) {
          return false
        }
      }
      return true
    }
    if (str.length === 10) {
      for (let i = 0; i < str.length; i++) {
        if (!((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) || (str.charCodeAt(i) === 45))) {
          return false
        }
      }
      return true
    }
    return false
  }

  /* Helper function to determine if state entered is a valid 2-digit state abbreviation */
  const isState = (str) => {
    const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    if (states.includes(str)) return true
    return false
  }

  return (
    <Box>
      <Container>
        {showAdminReport ? <Redirect to='/AdminReport' /> : null}
      {showRegistration ?
        <Grid container>
          <Grid container style={{marginTop: '2rem'}}>
            <Grid container>
              <Typography variant='h4'>
                Registration Form
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant='body1'>
                (* required)
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '1rem'}}>
            <Grid item xs={3}>
              <TextField label='* First Name' value={firstName} variant='outlined' onChange={handleFirstNameChange} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={3}>
              <TextField label='* Last Name' value={lastName} variant='outlined' onChange={handleLastNameChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '1rem'}}>
            <Grid item xs={4}>
              <TextField label='* Address 1' value={address1} variant='outlined' onChange={handleAddress1Change} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={4}>
              <TextField label='Address 2' value={address2} variant='outlined' onChange={handleAddress2Change} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '1rem'}}>
            <Grid container item xs={3}>
              <TextField label='* City' value={city} variant='outlined' onChange={handleCityChange} style={{width: '100%'}} />
            </Grid>
            <Grid container item xs={2}>
              <TextField label='* State (2-digits)' value={usState} variant='outlined' onChange={handleUsStateChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
            <Grid container item xs={3}>
              <TextField label='* Zip Code (12345 or 12345-1234)' value={zip} variant='outlined' onChange={handleZipChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
            <Grid container item xs={2}>
              <TextField label='* Country (US Only)' value={country} variant='outlined' onChange={handleCountryChange} style={{width: '100%', marginLeft: '0.5rem'}} />
            </Grid>
          </Grid>

          <Grid container style={{marginTop: '1rem'}}>
            {showSubmitButton ?
              <Grid item xs={1}>
                <Button color='primary' variant='contained' onClick={handleSubmit} >Submit</Button>
              </Grid>
              :
              <Grid item xs={1}>
                <Button disabled color='primary' variant='contained' >Submit</Button>
              </Grid>
            }
            <Grid item xs={2}>
              <Button color='primary' variant='contained' onClick={handleShowAdminReport} >Admin Report</Button>
            </Grid>
          </Grid>

        </Grid>
        : null
      }

      {showConfirmation ?
        <Confirmation dbError={dbError} userFromDB={userFromDB} handleConfirmationRouting={handleConfirmationRouting} />
        : null
      }

      </Container>
    </Box>
  )
}

export default Registration
