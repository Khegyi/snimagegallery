/* eslint-disable require-jsdoc */
import React from 'react'
import { AppBar, Button, Dialog, IconButton, Toolbar, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SaveAlt from '@material-ui/icons/SaveAlt'
import { Transition, useStyles } from './app'
import ResponsiveDrawer from './ResponsiveDrawer'
import { FullScreenprops } from './Interface'

export default function FullScreenDialog(props: FullScreenprops) {
  const classes = useStyles()
  return (
    <div>
      <Dialog fullScreen open={props.isopen} onClose={props.closeFunction} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.closeFunction} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Image
            </Typography>
            <IconButton edge="start" color="inherit" onClick={props.closeFunction} aria-label="Close">
              <SaveAlt />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <ResponsiveDrawer openededImg={props.openedImg} /> */}
        <ResponsiveDrawer />
      </Dialog>
    </div>
  )
}
