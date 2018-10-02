import React from 'react'
import {TextField,Button} from '@material-ui/core'

const MaterialSignIn = (props) => {
  return (
    <form>
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
        />
        <Button variant="contained" color="secondary" type="submit">Submit</Button>
    </form>
  )
}

export default MaterialSignIn