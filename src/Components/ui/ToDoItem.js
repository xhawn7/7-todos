import { Checkbox, Flex, Input, Button } from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";
const ToDoItem = ({ item, update, remove, toggle }) => {
  return (
    <Flex pt={2} key={item.id}>
      <Checkbox
        isChecked={item?.done}
        onChange={() => toggle(item.id)}
      />
      <Input
        mx={2}
        value={item?.text}
        onChange={(e) => update(e, item.id)}
        style={{ textDecoration: item.done ? 'line-through' : null }}
        disabled={item.done}
      />
      <Button
        onClick={() => remove(item.id)}
      >
        <MdDelete />
      </Button>
    </Flex>

  )
}

export default ToDoItem