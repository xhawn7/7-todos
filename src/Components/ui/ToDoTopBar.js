import { Button, Grid } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

const ToDoTopBar = () => {
  return (
    <div>
      <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
        <Button>7种状态管理</Button>
        <ColorModeSwitcher />
      </Grid>
    </div>
  )
}

export default ToDoTopBar