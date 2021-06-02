import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Confirmation = ({dbError, handleConfirmationRouting, userFromDB}) => {

  /* Decide whether to show the error message or the newly added user information */
  const [ showError, setShowError ] = useState(false)

  /* Tell parent Registration Component to hide this Confirmation component and show itself */
  const handleClick = () => {
    handleConfirmationRouting()
  }

  useEffect( () => {
    if (dbError === 'Error' || dbError === 'Server validation error') {
      setShowError(true)
    }
  }, [] )

  return (
    <Grid container>
      {showError ?
        <Grid container>
          <Grid container style={{marginTop: '2rem'}}>
            <Typography variant='h6'>
              {dbError}, please go Back and try again
            </Typography>
          </Grid>
          <Grid container>
            <Button color='primary' variant='contained' onClick={handleClick}>
              Back
            </Button>
          </Grid>
        </Grid>
      :
        <Grid container>
          <Grid container style={{marginTop: '2rem'}}>
            <Typography variant='h6'>
              The following information was successfully added:
            </Typography>
          </Grid>

          <Grid container>
            <Grid container item xs={12}>
              <Typography variant='h6'>
                {userFromDB.firstName} {userFromDB.lastName}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid container item xs={12}>
              <Typography variant='h6'>
                {userFromDB.address1} {userFromDB.address2}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid container item xs={12}>
              <Typography variant='h6'>
                {userFromDB.city}, {userFromDB.state}, {userFromDB.zip} {userFromDB.country}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Button color='primary' variant='contained' onClick={handleClick}>
              Back
            </Button>
          </Grid>
        </Grid>
      }

    </Grid>
  )
}

Confirmation.propTypes = {
  dbError: PropTypes.string,
  handleConfirmationRouting: PropTypes.func,
  userFromDB: PropTypes.object
}

export default Confirmation
