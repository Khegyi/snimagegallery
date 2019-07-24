/* eslint-disable require-jsdoc */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { ConstantContent, ODataCollectionResponse } from '@sensenet/client-core'
import { CssBaseline, Slide } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { makeStyles } from '@material-ui/core/styles'
import snLogo from './assets/sensenet_logo_transparent.png'
import { useRepository } from './hooks/use-repository'
import FullScreenDialog from './FullScreenDialog'
import { AdvancedGridList } from './AdvancedGridList'
import { SelectedImage } from './Interface'

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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    flexShrink: 0,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
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
    width: 'auto',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '84vh',
  },
  selectedImgContent: {
    padding: '24px 0',
    width: `calc(100% - ${drawerWidth}px)`,
    right: drawerWidth,
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
  // const usr = useCurrentUser()
  const repo = useRepository()
  const [open, setOpen] = React.useState(false)
  const [data, setData] = useState<File[]>([])
  const [selectedimage, setSelectedimage] = React.useState<SelectedImage>({
    imgIndex: 0,
    imgPath: '',
    imgTitle: '',
    imgDescription: '',
    imgAuthor: '',
    imgAuthorAvatar: '',
    imgCreationDate: '',
    imgSize: '',
  })

  function handleClickOpen(imageInfo: SelectedImage) {
    console.log(imageInfo)
    setSelectedimage({
      imgIndex: imageInfo.imgIndex,
      imgPath: imageInfo.imgPath,
      imgTitle: imageInfo.imgTitle,
      imgDescription: imageInfo.imgDescription,
      imgAuthor: imageInfo.imgAuthor,
      imgAuthorAvatar: imageInfo.imgAuthorAvatar,
      imgCreationDate: imageInfo.imgCreationDate,
      imgSize: imageInfo.imgSize,
    })
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }
  useEffect(() => {
    async function loadImages(): Promise<void> {
      const result: ODataCollectionResponse<any> = await repo.loadCollection({
        path: `${ConstantContent.PORTAL_ROOT.Path}/Content/IT/ImageLibrary`,
        oDataOptions: {
          select: ['DisplayName', 'Description', 'CreationDate', 'CreatedBy', 'ModificationDate', 'Size'] as any,
          expand: ['CreatedBy'] as any,
        },
      })
      console.log(result.d.results)
      setData(result.d.results)
    }
    loadImages()
  }, [repo])
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
      {/* <ImageListerProvider> */}
      <AdvancedGridList openFunction={handleClickOpen} imgList={data} />
      <FullScreenDialog openedImg={selectedimage} isopen={open} closeFunction={handleClose} imgList={data} />
      {/* </ImageListerProvider> */}
    </div>
  )
}
