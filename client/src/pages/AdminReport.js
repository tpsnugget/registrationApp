import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const AdminReport = ({handleAdminReportRouting}) => {

  const handleClick = () => {
    handleAdminReportRouting()
  }

  return (
    <Grid container>
      <Grid container>
        <Typography variant='h6'>
          Admin Report is up Man!
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

AdminReport.propTypes = {
  handleAdminReportRouting: PropTypes.func
}

export default AdminReport
