/* eslint-disable require-jsdoc */
import React from 'react'
import { Divider, Drawer, Typography } from '@material-ui/core'
//import { useTheme } from '@material-ui/core/styles'
import { useStyles } from './app'
import { ResponsiveProps } from './Interface'
import DotsMobileStepper from './DotsMobileStepper'

export const DummyDrawerRight: React.FunctionComponent<ResponsiveProps> = props => {
  const classes = useStyles()
  // const theme = useTheme()
  return (
    <div className={classes.root}>
      <main className={classes.selectedImgContent}>
        <div className={classes.toolbar} />
        <img className={classes.imgTileFullSize} src={props.imageInfo.imgPath} />
        <DotsMobileStepper />
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right">
        <div className={classes.toolbar} />
        <Divider />
        <Typography>Name: {props.imageInfo.imgTitle}</Typography>
        <Typography>Descripton: {props.imageInfo.imgDescription}</Typography>
        <Typography>Author: {props.imageInfo.imgAuthor}</Typography>
        <Typography>Created: {props.imageInfo.imgCreationDate}</Typography>
        <Typography>Size: {props.imageInfo.imgSize}</Typography>
        <Divider />
      </Drawer>
    </div>
  )
}
