/* eslint-disable require-jsdoc */
import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Divider, Drawer, Typography } from '@material-ui/core'
import Person from '@material-ui/icons/Person'
import { useStyles } from './app'
import { ResponsiveProps } from './Interface'
import DotsMobileStepper from './DotsMobileStepper'

export const DummyDrawerRight: React.FunctionComponent<ResponsiveProps> = props => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:600px)')
  // const theme = useTheme()
  return (
    <div className={classes.root}>
      <main className={classes.drawerMain}>
        <div className={classes.selectedImgContent}>
          <img className={classes.imgTileFullSize} src={props.imageInfo.imgPath} />
        </div>
        <DotsMobileStepper
          steppingFunction={props.steppingFunction}
          imageIndex={props.imageInfo.imgIndex}
          imageListLenght={props.imageListLenght}
        />
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={matches ? 'right' : 'bottom'}>
        <div className={classes.toolbar} />
        <Divider />
        <Typography>Name: {props.imageInfo.imgTitle}</Typography>
        <Typography>Descripton: {props.imageInfo.imgDescription}</Typography>
        <Typography>
          Author: {props.imageInfo.imgAuthor}
          {props.imageInfo.imgAuthorAvatar != '' ? (
            <img className={classes.avatarImg} src={props.imageInfo.imgAuthorAvatar} />
          ) : (
            <Person className={classes.defaultAvatarimg} />
          )}
        </Typography>
        <Typography>Created: {props.imageInfo.imgCreationDate}</Typography>
        <Typography>Size: {props.imageInfo.imgSize}</Typography>
        <Divider />
      </Drawer>
    </div>
  )
}
