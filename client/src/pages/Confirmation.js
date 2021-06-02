import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Confirmation = ({handleConfirmationRouting}) => {

  const handleClick = () => {
    handleConfirmationRouting()
  }

  return (
    <Grid container>
      <Grid container>
        <Typography variant='h6'>
          Confirmation is up Man!
        </Typography>
      </Grid>
      <Grid container>
        <Button color='primary' variant='contained' onClick={handleClick}>
          Back
        </Button>
      </Grid>
    </Grid>
  )
}

Confirmation.propTypes = {
  handleConfirmationRouting: PropTypes.func
}

export default Confirmation
