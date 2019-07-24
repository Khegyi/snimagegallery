import React, { createContext, useEffect, useState } from 'react'
import { ConstantContent, ODataCollectionResponse } from '@sensenet/client-core'
import { File } from '@sensenet/default-content-types'
import { useRepository } from './hooks/use-repository'

export const ImageListContext = createContext<File[]>([])

const ImageListContextProvider = (props: File[]) => {
  const [images, setImages] = useState<File[]>([])
  const repo = useRepository()
  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    async function loadImages(): Promise<void> {
      const result: ODataCollectionResponse<File> = await repo.loadCollection({
        path: `${ConstantContent.PORTAL_ROOT.Path}/Content/IT/ImageLibrary`,
        oDataOptions: {
          select: ['DisplayName', 'Description', 'CreationDate', 'CreatedBy', 'ModificationDate', 'Size'] as any,
          expand: ['CreatedBy'] as string[],
        },
      })
      console.log(result.d.results)
      setImages(result.d.results)
    }
    loadImages()
  }, [repo])
  return <ImageListContext.Provider value={images}>{props.children}</ImageListContext.Provider>
}

export default ImageListContext
