import { Button, Grid, Input } from '@chakra-ui/react'
import { GrAdd } from "react-icons/gr";
import { PiShuffleBold } from "react-icons/pi";
import React from 'react'
const ToDoAdd = ({ value, onValChange, add, loadToDo, toDoList }) => {
  return (
    <>
      <Grid templateColumns="5fr 1fr 1fr" columnGap="3">
        <Input
          onChange={onValChange}
          value={value}
          placeholder='new to do'
        />
        <Button onClick={add} isDisabled={value.length === 0}>
          <GrAdd />
        </Button>
        <Button onClick={loadToDo} variant='outline' isDisabled={toDoList.length > 0}>
          <PiShuffleBold />
        </Button>
      </Grid>
    </>
  )
}

export default ToDoAdd