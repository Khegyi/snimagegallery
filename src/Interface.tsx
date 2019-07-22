export interface SelectedImage {
  imgPath: string
  imgTitle: string
  imgDescription: string
  imgAuthor: string
  imgAuthorAvatar: string
  imgCreationDate: string
  imgSize: string
}

export interface FullScreenprops {
  openFunction: (imgId: any) => void
  openedImg: SelectedImage
  isopen: boolean
  closeFunction: () => void
}

export interface ResponsiveProps {
  openedImg: SelectedImage
}
