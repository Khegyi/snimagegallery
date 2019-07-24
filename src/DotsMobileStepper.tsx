/* eslint-disable require-jsdoc */
import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
//import ImageListContextProvider from './ImgList'

export default function DotsMobileStepper(props: any) {
  // const {images} = useContext{ImageListContextProvider}
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      flexGrow: 1,
    },
  })
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = 6
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <MobileStepper
      steps={maxSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  )
}
