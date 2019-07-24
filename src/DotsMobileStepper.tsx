/* eslint-disable require-jsdoc */
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

export default function DotsMobileStepper(props: any) {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      flexGrow: 1,
    },
  })
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(props.imageIndex)
  const maxSteps = props.imageListLenght
  let imageIndex = 0
  function handleNext() {
    console.log(activeStep)
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
    console.log(activeStep)
    imageIndex = activeStep + 1
    props.steppingFunction(imageIndex)
  }
  function handleBack() {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
    imageIndex = activeStep - 1
    props.steppingFunction(imageIndex)
  }
  return (
    <MobileStepper
      steps={maxSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === props.imageListLenght - 1}>
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
