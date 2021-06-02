import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const AdminReport = () => {

  /* Handle data returned from MongoDB Database */
  const [ allUsers, setAllUsers ] = useState([])

  /* Route back to Registration page */
  const [ showRegistration, setShowRegistration ] = useState(false)

  /* Back button click Routes back to Registration page */
  const handleClick = () => {
    setShowRegistration(true)  
  }

  /* Get all users from MongoDB Database */
  useEffect( () => {
    axios.get('https://rainbow-river-4709.herokuapp.com/adminReport')
    // axios.get('http://localhost:3001/adminReport')
      .then( res => {
        setAllUsers(res.data.allUsers)
      })
  }, [] )

  const usersToDisplay = allUsers.map( (user, i) => {
    return (
      <Grid key={i} container style={i % 2 === 0 ? null : {backgroundColor: 'rgba(0,0,255,0.1)'}}>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.firstName}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.lastName}
            </Typography>
          </Grid>
          <Grid container item xs={2} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.address1}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.address2}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.city}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.state}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.zip}
            </Typography>
          </Grid>
          <Grid container item xs={1} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.country}
            </Typography>
          </Grid>
          <Grid container item xs={3} justify='flex-start' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
            <Typography variant='body1'>
              {user.date}
            </Typography>
          </Grid>
      </Grid>
    )
  } )

  return (
    <Box>
      <Container>
        {showRegistration ? <Redirect to='/' /> : null}
        <Grid container>

          <Grid container style={{marginTop: '2rem'}}>
            <Typography variant='h5'>
              Admin Report
            </Typography>
            <Button color='primary' variant='contained' onClick={handleClick} style={{marginLeft: '1rem'}}>
              Back
            </Button>
          </Grid>

          <Grid container style={{marginTop: '2rem', border: '2px solid blue', padding: '0.25rem'}}>
            <Grid container style={{color: 'white', backgroundColor: 'rgba(0,0,255,0.4)'}}>

              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  First Name
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Last Name
                </Typography>
              </Grid>
              <Grid container item xs={2} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Address 1
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Address 2
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  City
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  State
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Zip
                </Typography>
              </Grid>
              <Grid container item xs={1} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Country
                </Typography>
              </Grid>
              <Grid container item xs={3} justify='center' style={{borderRight: '1px solid white', paddingLeft: '0.2rem', paddingRight: '0.2rem'}}>
                <Typography variant='body1'>
                  Date
                </Typography>
              </Grid>

            </Grid>

            {usersToDisplay}

          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default AdminReport
