import React from 'react'
import ToDoAdd from './ToDoAdd'
import TodoList from './ToDoList'
import { Heading, Card, CardBody, CardHeader } from "@chakra-ui/react";

const ToDoMain = ({ title, addProps, listProps }) => {

  return (
    <>
      <Card mb={4}>
        <CardHeader pb={0}>
          <Heading as='h2' size='md'>{title}</Heading>
        </CardHeader>
        <CardBody >
          <ToDoAdd {...addProps} />
          <TodoList {...listProps} />
        </CardBody>
      </Card>
    </>
  )
}

export default ToDoMain