/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react'
import { ConstantContent, ODataCollectionResponse } from '@sensenet/client-core'
import { GenericContent, User } from '@sensenet/default-content-types'
import { IconButton } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { useRepository } from './hooks/use-repository'
import { useStyles } from './app'
export function AdvancedGridList(props: any) {
  const classes = useStyles()
  const repo: any = useRepository()
  const [data, setData] = useState<GenericContent[]>([])
  function pickTile(anumber: any) {
    let tilenumber = anumber % 3
    tilenumber = tilenumber === 0 ? 2 : 1
    return tilenumber
  }
  useEffect(() => {
    // eslint-disable-next-line require-jsdoc
    async function loadImages(): Promise<void> {
      const result: ODataCollectionResponse<GenericContent> = await repo.loadCollection({
        path: `${ConstantContent.PORTAL_ROOT.Path}/Content/IT/ImageLibrary`,
        oDataOptions: {
          select: ['DisplayName', 'Description', 'CreationDate', 'CreatedBy', 'ModificationDate'] as any,
          expand: ['CreatedBy'] as string[],
        },
      })
      setData(result.d.results)
    }
    loadImages()
  }, [repo])
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {data.map((tile, index) => (
          <GridListTile key={tile.Id} cols={pickTile(index)} rows={pickTile(index)}>
            <img
              className={classes.imgTile}
              src={repo.configuration.repositoryUrl + tile.Path}
              onClick={() => props.openFunction(tile.Id)}
              alt={tile.Description}
            />
            <GridListTileBar
              title={tile.DisplayName}
              titlePosition="bottom"
              subtitle={
                <span>
                  by: {tile.CreatedBy ? (tile.CreatedBy as User).FullName : ''} - {''}{' '}
                </span>
              }
              actionIcon={<IconButton aria-label={`star ${tile.DisplayName}`} className={classes.icon}></IconButton>}
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
