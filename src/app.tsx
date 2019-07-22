/* eslint-disable import/export */
/* eslint-disable require-jsdoc */
/* eslint-disable react/display-name */
import React from 'react'

import { Button, CssBaseline, Slide, Tooltip, Typography } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { makeStyles } from '@material-ui/core/styles'
import snLogo from './assets/sensenet_logo_transparent.png'
import { useCurrentUser } from './hooks/use-current-user'
import { useRepository } from './hooks/use-repository'
import FullScreenDialog from './FullScreenDialog'
import { AdvancedGridList } from './AdvancedGridList'
import { SelectedImage } from './Interface'

/**
 * The main entry point of your app. You can start h@cking from here ;)
 */
const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  imgTile: {
    cursor: 'pointer',
  },
  imgTileFullSize: {
    width: 500,
    height: 450,
    position: 'relative',
    margin: '20px auto',
  },
  selectedImgContent: {
    padding: '24px',
    flexGrow: 1,
    position: 'absolute',
  },
  gridList: {
    width: 800,
    height: 600,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    // eslint-disable-next-line no-useless-concat
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}))

export const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export const App: React.FunctionComponent = () => {
  const usr = useCurrentUser()
  const repo = useRepository()
  const [open, setOpen] = React.useState(false)
  const [selectedimage, setSelectedimage] = React.useState<SelectedImage>({
    imgPath: '',
    imgTitle: '',
    imgDescription: '',
    imgAuthor: '',
    imgAuthorAvatar: '',
    imgCreationDate: '',
    imgSize: '',
  })

  function handleClickOpen(imgId: any) {
    console.log(imgId)
    setSelectedimage({
      imgPath: 'https://dev.demo.sensenet.com/Root/Content/IT/ImageLibrary/bagas-haryo-1415756-unsplash.jpg',
      imgTitle: 'Test',
      imgDescription: 'TestDEx',
      imgAuthor: 'Admin3',
      imgAuthorAvatar:
        'https://avatars2.githubusercontent.com/u/14124275?s=400&u=24c25d332a89b3fbf359a4ece4f1b143c9bfd02e&v=4',
      imgCreationDate: '20154',
      imgSize: '6546545',
    })
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${snLogo})`,
        backgroundSize: 'auto',
      }}>
      <CssBaseline />
      <AdvancedGridList openFunction={handleClickOpen} />
      <FullScreenDialog
        openFunction={handleClickOpen}
        openedImg={selectedimage}
        isopen={open}
        closeFunction={handleClose}
      />
    </div>
  )
}
