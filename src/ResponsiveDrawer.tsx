/* eslint-disable require-jsdoc */
import React from 'react'
import { CssBaseline, Divider, Drawer, Hidden, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useStyles } from './app'
import { ResponsiveProps } from './Interface'

export default function ResponsiveDrawer(props: any) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {/* <Typography>Name: {props.openedImg.imgTitle}</Typography>
      <Typography>Descripton: {props.openedImg.imgDescription}</Typography>
      <Typography>Author: {props.openedImg.imgAuthor}</Typography>
      <Typography>Created: {props.openedImg.imgCreationDate}</Typography>
      <Typography>Size: {props.openedImg.imgSize}</Typography>
      <Divider /> */}
      <Typography>Name: </Typography>
      <Typography>Descripton: </Typography>
      <Typography>Author: </Typography>
      <Typography>Created: </Typography>
      <Typography>Size: </Typography>
      <Divider />
    </div>
  )
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="Mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.selectedImgContent}>
        <div className={classes.toolbar} />
        <img
          className={classes.imgTileFullSize}
          src="https://dev.demo.sensenet.com/Root/Content/IT/ImageLibrary/bagas-haryo-1415756-unsplash.jpg"
        />
      </main>
    </div>
  )
}
