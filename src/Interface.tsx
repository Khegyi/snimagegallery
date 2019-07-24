//import { File, GenericContent } from '@sensenet/default-content-types'

export interface SelectedImage {
  imgIndex: number
  imgPath: string
  imgTitle: string
  imgDescription: string
  imgAuthor: string
  imgAuthorAvatar: string
  imgCreationDate: string
  imgSize: string
  imgDownloadUrl: string
}

export interface FullScreenprops {
  openedImg: SelectedImage
  isopen: boolean
  closeFunction: () => void
  steppingFunction: (imageIndex: number, openInfoTab: boolean) => void
  imgList: object[]
}

export interface AdvancedGridprops {
  openFunction: (imageIndex: number, openInfoTab: boolean) => void
  imgList: any[]
}

export interface ImageList {
  images: object[]
}

export interface ResponsiveProps {
  imageInfo: SelectedImage
  steppingFunction: (imageIndex: number, openInfoTab: boolean) => void
  imageListLenght: number
}
